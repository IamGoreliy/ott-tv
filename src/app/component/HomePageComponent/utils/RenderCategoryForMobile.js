import {Box, Button, Typography} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";
import {IconArrowForBtn} from "@/utils/createSvg";
import {useCallback, useEffect, useRef, useState} from "react";

export const RenderCategoryForMobile = ({whatCategoryRender, scrollResult}) => {
    const listRef = useRef();

    const tracScroll = useCallback((trackingObject) => {
        const totalListWidth = trackingObject.scrollWidth - trackingObject.offsetWidth;
        const scrollPosition = trackingObject.scrollLeft;
        const listWidthSizeInPercent  = Math.round(((totalListWidth - scrollPosition) / totalListWidth) * 100);
        scrollResult(100 - listWidthSizeInPercent);
    }, [])

    useEffect(() => {
        const list = listRef.current
        const handleScroll = () => tracScroll(list);
        list.addEventListener("scroll", handleScroll);

        return () => list.removeEventListener('scroll', handleScroll);
    }, [tracScroll]);

    return (
        <Box
            ref={listRef}
            component='ul'
            sx={{
                listStyle: 'none',
                padding: 0,
                display: {xs: 'flex', md: 'none'},
                justifyContent: 'space-between',
                columnGap: {xs: '20px', md: '10px'},
                mt: '30px',
                overflow: 'auto',
            }}
        >
            {whatCategoryRender.length && whatCategoryRender.map((item, index) => {
                const {genre, arr} = item;
                return (
                    <Box
                        key={index}
                        component='li'
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: {xs: '20px', md: '10px'},
                            backgroundColor: 'black',
                            borderRadius: '12px',
                            padding: '20px 15px',
                            maxWidth: '280px',
                            minWidth: '140px',
                        }}
                    >
                        <Box
                            sx={{
                                width: '80%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                }}
                            >
                                {genre}
                            </Typography>
                            {/*🍉🍉🍉 кнопка стрелка которая используется в версии для ПК 🍉🍉🍉*/}
                            {/*<Button*/}
                            {/*    sx={{*/}
                            {/*        minWidth: 0,*/}
                            {/*        width: '40px',*/}
                            {/*        height: '40px',*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    <IconArrowForBtn*/}
                            {/*        sx={{*/}
                            {/*            transform: 'rotate(-180deg)',*/}
                            {/*        }}*/}
                            {/*    />*/}
                            {/*</Button>*/}
                        </Box>
                        {arr.map((ele, index) => {
                            const {backdrop_path: imgUrl} = ele;

                            return (
                                <ImageMUI
                                    key={index}
                                    src={imgUrl}
                                    alt={''}
                                    width={166}
                                    height={250}
                                    sx={{
                                        width: '115px',
                                        height: '140px',
                                        borderRadius: '10px',
                                        border: '1px solid white',
                                    }}
                                />
                            )
                        })}
                    </Box>
                )
            })}
        </Box>
    )
}