'use client';
import {useCallback, useEffect, useRef, useState} from "react";
import {Box, Button, Grid2} from "@mui/material";
import Link from "next/link";
import {ImageMUI} from "@/utils/customComponents";
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";
import {CloseModalIcon, IconLoading} from "@/utils/createSvg";
import {keyframes} from "@emotion/react";
import {RenderDescriptionMovie} from "@/app/movieandserial/filmsList/component/renderDescriptionMovie";

const initialStateOption = {
    isOpen: false,
    listId: null,
}

const mobileSize = {
    startPath: 'https://image.tmdb.org/t/p/w780',
    imageWidth: '358',
    imageHeight: '468',
}

const pcSize = {
    startPath: 'https://image.tmdb.org/t/p/original',
    imageWidth: '1280',
    imageHeight: '700',
}

const loadingAnimation = keyframes`
    10% {
        transform: rotate(36deg);    
    }
    20% {
        transform: rotate(72deg);
    }
    30% {
        transform: rotate(108deg);
    }
    40% {
        transform: rotate(144deg);
    }
    50% {
        transform: rotate(180deg);
    }
    60% {
        transform: rotate(216deg);
    }
    70% {
        transform: rotate(252deg);
    }
    80% {
        transform: rotate(288deg);
    }
    90% {
        transform: rotate(324deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const thumbForAnimation = {
    marginTop: '20px',
    textAlign: 'center',
}

export const RenderList = ({list = [], idCategory}) => {
    const [renderList, setRenderList] = useState(list);
    const [pageNum, setPageNum] = useState(1);
    const sectionFooterRef = useRef(null);
    const [loadingData, setLoadingData] = useState(false);
    const [openOption, setOpenOptions] = useState(initialStateOption);


    useEffect(() => {
        if (pageNum > 1) {
            setLoadingData(true);
            fetchSideAPI(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNum}&sort_by=popularity.desc&with_genres=${idCategory}`)
                .then(res => {
                    if (res?.results.length) {
                        const {page, results} = res;
                        setRenderList(prevState => [...prevState, ...results]);
                    } else {
                        setPageNum(prevState => prevState - 1)
                    }
                })
                .catch(e => {
                    console.log(e);
                    setPageNum(prevState => prevState - 1)
                })
                .finally(() => setLoadingData(false));
        }
    }, [pageNum]);

    // функця которая вычисляет положения скрола и добавляет следуюющую страницу для бесконечного скролла (используеться в слушателе событий)
    const handlerBeforeLoadingData = useCallback((e, sizeFooter) => {
        if (window.scrollY + sizeFooter * 2 >= document.querySelector('#sectionList').offsetHeight) {
            setPageNum(prevState => prevState + 1);
        }

    }, []);
    // функция открытия list option
    const toggleOpenOption = useCallback((index) => {
        setOpenOptions(prevState => prevState.listId === index ? initialStateOption : { isOpen: true, listId: index })
    }, [])

    useEffect(() => {
        if (!sectionFooterRef.current){
            sectionFooterRef.current = document.querySelector('#footer')?.offsetHeight || 0;
        }
        const beforeLoadingDataForEventListener = (e) => handlerBeforeLoadingData(e, sectionFooterRef.current);
        addEventListener('scroll', beforeLoadingDataForEventListener, {passive: true});

        return () => removeEventListener('scroll', beforeLoadingDataForEventListener);

    }, [])

    return (
        <Box>
            <Grid2
                id={'sectionList'}
                container
                spacing={4}
                sx={{
                    position: 'relative',
                }}
            >
                {renderList.map((ele, index) => {
                    const {id, backdrop_path: backdropPath, poster_path: posterPath, original_title: originTitle, overview} = ele;
                    return (
                        <Grid2
                            key={index}
                            size={{
                                xs: 16,
                                md: 6,
                                lg: 4,
                                xl: 4,
                            }}
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            {/*<Link*/}
                            {/*    href={''}*/}
                            {/*>*/}
                                <ImageMUI
                                    onClick={() => toggleOpenOption(index)}
                                    src={`${mobileSize.startPath}${posterPath}`}
                                    alt={''}
                                    width={mobileSize.imageWidth}
                                    height={mobileSize.imageHeight}
                                    sx={{
                                        width: '100%',
                                    }}

                                />
                            {/*</Link>*/}
                            {/*{index === openOption.listId &&*/}
                                <Box
                                    sx={{
                                        left: '0px',
                                        width: '100%',
                                        height: openOption.listId === index ? '400px' : '0px',
                                        transition: 'height 500ms linear',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            left: 0,
                                            backgroundColor: 'red',
                                            width: '100%',
                                            height: openOption.listId === index ? '400px' : '0px',
                                            border: openOption.listId === index ? '1px solid white' : '0px solid b black',
                                            borderRadius: '12px',
                                            padding: openOption.listId === index ? '20px' : '0px',
                                            overflow: 'hidden',
                                            transition: 'height 500ms linear, padding 200ms linear 200ms',
                                        }}
                                    >
                                        <Button
                                            onClick={() => setOpenOptions(initialStateOption)}
                                            sx={{
                                                display: {xs: 'none', md: 'block'},
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                            }}
                                        >
                                            <CloseModalIcon
                                                sx={{
                                                    fill: 'white',
                                                }}
                                            />
                                        </Button>
                                        <RenderDescriptionMovie
                                            id={id}
                                            imgPath={backdropPath}
                                            title={originTitle}
                                            description={overview}
                                            closeMenuOpt={() => setOpenOptions(initialStateOption)}/>
                                    </Box>
                                </Box>
                            {/*}*/}
                        </Grid2>
                    )
                })}
            </Grid2>
            {loadingData && <Box sx={{...thumbForAnimation}}>
                <IconLoading sx={{
                    fill: 'red',
                    width: '70px',
                    height: '70px',
                    animation: `${loadingAnimation} 2000ms linear infinite`
                }}/>
            </Box>}
        </Box>
    )
}