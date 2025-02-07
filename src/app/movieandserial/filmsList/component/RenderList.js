'use client';
import {useCallback, useEffect, useRef, useState} from "react";
import {Box} from "@mui/material";
import Link from "next/link";
import {ImageMUI} from "@/utils/customComponents";
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";

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

export const RenderList = ({list = [], idCategory}) => {
    const [renderList, setRenderList] = useState(list);
    const [pageNum, setPageNum] = useState(1);
    const sectionFooterRef = useRef(null);

    useEffect(() => {
        if (pageNum > 1) {
            fetchSideAPI(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNum}&sort_by=popularity.desc&with_genres=${idCategory}`)
                .then(res => {
                    const {page, results} = res;
                    setRenderList(prevState => [...prevState, ...results]);
                })
                .catch(e => console.log(e))
        }   
    }, [pageNum]);

    const handlerBeforeLoadingData = useCallback((e, sizeFooter) => {
        // console.log(document.querySelector('#sectionList').offsetHeight);
        // console.log(window.scrollY + sizeFooter * 2);
        if (window.scrollY + sizeFooter * 2 >= document.querySelector('#sectionList').offsetHeight) {
            setPageNum(prevState => prevState + 1);
        }

    }, []);

    useEffect(() => {
        sectionFooterRef.current = document.querySelector('#footer').offsetHeight;
        const test = (e) => handlerBeforeLoadingData(e, sectionFooterRef.current);
        addEventListener('scroll', test)        ;

        return () => removeEventListener('scroll', handlerBeforeLoadingData);

    }, [])

    return (
        <Box
            id={'sectionList'}
            component={'ul'}
            sx={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
            {renderList.map((ele, index) => {
                const {id, backdrop_path: backdropPath, poster_path: posterPath} = ele;
                return (
                    <Box
                        key={index}
                    >
                        <Link
                            href={''}
                        >
                            <ImageMUI
                                src={`${mobileSize.startPath}${posterPath}`}
                                alt={''}
                                width={mobileSize.imageWidth}
                                height={mobileSize.imageHeight}
                            />
                        </Link>
                    </Box>
                )
            })}
        </Box>
    )
}