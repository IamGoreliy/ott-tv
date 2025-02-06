import {Box, Button} from "@mui/material";
import styled from '@emotion/styled';
import {IconArrowForBtn} from "@/utils/createSvg";
import {useCallback, useEffect, useState} from "react";

const NumPage = styled(props => {
    const {id, currentPage, sx, ...other} = props;
    return <div {...other} />
})(({id, currentPage, sx}) => {
    return {
        width: currentPage === id ? '20px' : '15px',
        height: '2px',
        backgroundColor: currentPage === id ? 'red' : 'gray',
        ...sx,
    }
})

export const PaginationForCategory = ({changePage}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlerTurnPageUp = useCallback(() => {
        setCurrentPage(prevState => prevState < 4 ? prevState + 1 : prevState);
    }, []);

    const handlerTurnPageDown = useCallback(() => {
        setCurrentPage(prevState => prevState > 1 ? prevState - 1 : prevState);
    }, []);

    useEffect(() => {
        changePage(currentPage)
    }, [currentPage]);

    return (
        <Box
            sx={{
                display: {xs: 'none', md: 'flex'},
                alignItems: 'center',

            }}
        >
            <Button
                onClick={handlerTurnPageDown}
            >
                <IconArrowForBtn/>
            </Button>
            <Box
                sx={{
                    display: 'flex',
                    columnGap: '5px',
                }}
            >
                <NumPage id={1} currentPage={currentPage}/>
                <NumPage id={2} currentPage={currentPage}/>
                <NumPage id={3} currentPage={currentPage}/>
                <NumPage id={4} currentPage={currentPage}/>
            </Box>
            <Button
                onClick={handlerTurnPageUp}
            >
                <IconArrowForBtn
                    sx={{
                        transform: 'rotate(-180deg)',
                    }}
                />
            </Button>
        </Box>
    )
}