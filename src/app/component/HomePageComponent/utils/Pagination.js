import {Box} from "@mui/material";
import {useState} from "react";

const stylingPag = {
    height: '3px',
    backgroundColor: '#333333',
}

const paginatioArr = [1, 2, 3, 4];

export const Pagination = ({pageNumber, changeNumPage}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                columnGap: '5px',
            }}
        >
            {paginatioArr.map(ele => {
                return (
                    <Box
                        key={ele}
                        onClick={() => changeNumPage(ele)}
                        sx={{
                            padding: '10px 0px',
                            cursor: 'pointer',
                        }}
                    >
                    <Box
                        sx={{
                            ...stylingPag,
                            backgroundColor: pageNumber === ele ? 'red' : 'gray',
                            width: pageNumber === ele ? '20px' : '15px',
                        }}
                    />
                    </Box>
                )
            })}
        </Box>
    )
}