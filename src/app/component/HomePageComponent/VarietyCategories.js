'use client';
import {Box, Button, Typography} from "@mui/material";
import {IconArrowForBtn} from "@/utils/createSvg";
import {Pagination} from "@/app/component/HomePageComponent/utils/Pagination";
import {useState} from "react";

// 🌈🌈🌈 styling start
const titleH2 = {
    fontSize: '38px',
    fontWeight: 700,
    fontFamily: 'Manrope, sans-serif',
};

const subtitle = {
    fontSize: '18px',
    fontWeight: 700,
    fontFamily: 'Manrope, sans-serif',
    color: '#999999',
};

const stylingLeftBtnIcon = {
    backgroundColor: '#1A1A1A',
    minWidth: 'unset',
    width: '3.5rem',
    height: '3.5rem',

};

const stylingRightBtnIcon = {
    transform: 'rotate(180deg)',
    backgroundColor: '#1A1A1A',
    minWidth: 'unset',
    width: '3.5rem',
    height: '3.5rem',
};

// 🌈🌈🌈 styling end



export const VarietyCategories = () => {
    const [whatPage, setWhatPage] = useState(1);

    const handlePageUp = () => {
        if (whatPage < 4) {
            setWhatPage(whatPage + 1);
        }
    }

    const handlePageDown = () => {
        if (whatPage > 1) {
            setWhatPage(whatPage - 1);
        }
    }

    return (
        <Box
            sx={{
                mt: '200px',
            }}
        >
            {/*🐛🐛🐛заглавие секции🐛🐛🐛*/}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                }}
            >
                <Box>
                    <Typography
                        variant={'h2'}
                        sx={{
                            ...titleH2,
                        }}
                    >
                        Explore our wide variety of categories
                    </Typography>
                    <Typography
                        variant={'subtitle1'}
                        sx={{
                            ...subtitle,
                        }}
                    >
                        Whether you&apos;re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#000000',
                        padding: '15px',
                        borderRadius: '12px',
                        columnGap: "10px",
                    }}
                >
                    <Button
                        onClick={handlePageDown}
                        sx={{
                            ...stylingLeftBtnIcon,
                        }}
                    >
                        <IconArrowForBtn/>
                    </Button>
                    <Box>
                        <Pagination pageNumber={whatPage} changeNumPage={setWhatPage}/>
                    </Box>
                    <Button
                        onClick={handlePageUp}
                        sx={{
                            ...stylingRightBtnIcon,
                        }}
                    >
                        <IconArrowForBtn/>
                    </Button>
                </Box>
            </Box>
            {/*🐛🐛🐛секция с продуктом🐛🐛🐛*/}
            <Box>

            </Box>
        </Box>
    )
}