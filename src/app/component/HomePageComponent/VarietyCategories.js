'use client';
import {Box, Button, IconButton, Typography} from "@mui/material";
import {IconArrowForBtn} from "@/utils/createSvg";
import {Pagination} from "@/app/component/HomePageComponent/utils/Pagination";
import {useEffect, useState} from "react";
import {listForCategory as allCategory} from "@/utils/listForCategory";
import {ImageMUI} from "@/utils/customComponents";
import {RenderCategoryForPC} from "@/app/component/HomePageComponent/utils/RenderCategoryForPC";
import {RenderCategoryForMobile} from "@/app/component/HomePageComponent/utils/RenderCategoryForMobile";

// 🌈🌈🌈 styling start
const titleH2 = {
    fontSize: {xs: '24px', md: '38px'},
    fontWeight: 700,
    fontFamily: 'Manrope, sans-serif',
};

const subtitle = {
    fontSize: {xs: '14px', md:'18px'},
    fontWeight: 500,
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

const sortListForPageUp = (listCategory, curPage, recordNewList) => {
    const page = {
        1: 0,
        2: 5,
        3: 10,
        4: 15,
    }
    const res = listCategory.slice(page[curPage + 1], page[curPage + 2]);
    recordNewList(res);
}

const sortListForPageDown = (listCategory, curPage, recordNewList) => {
    const page = {
        1: 0,
        2: 5,
        3: 10,
        4: 15,
    }
    const res = listCategory.slice(page[curPage - 1], page[curPage]);
    recordNewList(res);
}


export const VarietyCategories = () => {
    const [whatPage, setWhatPage] = useState(1);
    const [whatCategoryRender, setWhatCategoryRender] = useState([]);
    const [scrollResult, setScrollResult] = useState(0);


    useEffect(() => {
        const res = allCategory.slice(0, 5);
        setWhatCategoryRender(res);
    }, []);



    const handlePageUp = () => {
        if (whatPage < 4) {
            setWhatPage(whatPage + 1);
            sortListForPageUp(allCategory, whatPage, setWhatCategoryRender);
        }
    }

    const handlePageDown = () => {
        if (whatPage > 1) {
            setWhatPage(whatPage - 1);
            sortListForPageDown(allCategory, whatPage, setWhatCategoryRender);
        }
    }

    return (
        <Box
            sx={{
                // mt: '200px',
                padding: {xs: '80px 0px 40px', md: '200px 0px 100px'},
            }}
        >
            {/*🐛🐛🐛заглавие секции🐛🐛🐛*/}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: {xs: 'column', md: 'unset'},
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
                        display: {xs: 'none', md: 'flex'},
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
                <Box
                    sx={{
                        mt: '50px',
                        display: {xs: 'flex', md: 'none'},
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: '80px',
                            height: '5px',
                            borderRadius: '5px',
                            backgroundColor: '#333333',
                        }}
                    >
                        <Box
                            sx={{
                                width: `${scrollResult}%`,
                                height: '5px',
                                borderRadius: '5px',
                                backgroundColor: 'red',
                                // marginLeft: 'auto',
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            {/*🐛🐛🐛секция с продуктом🐛🐛🐛*/}
                <RenderCategoryForPC whatCategoryRender={whatCategoryRender}/>
                <RenderCategoryForMobile whatCategoryRender={allCategory} scrollResult={setScrollResult}/>
        </Box>
    )
}