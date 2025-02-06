'use client';
import {Box, Button, Typography} from "@mui/material";
import {IconCalendar, IconGenres, IconRating, IconStarsForRating, IconTranslate} from "@/utils/createSvg";
import {ImageMUI} from "@/utils/customComponents";
import {useCallback, useEffect, useState} from "react";

//start style component

const svgStyled = {
    fill: '#999999',
    width: '18px',
    height: '18px',
}

const titleStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    color: '#999999',
    marginLeft: '10px',
}

const informationStaling = {
    marginTop: '14px',
}

//end style component

const imgOption = {
    startPath: 'https://image.tmdb.org/t/p/w780',
    // imageWidth: '358',
    // imageHeight: '468',
    imageWidth: '87',
    imageHeight: '89',
}

const ratingStars = (quantity, rating,styling) => {
    const counter = [];
    while (counter.length < quantity) {
        const svgIcon = counter.length <= rating ? <IconStarsForRating sx={{...styling}}/> : <IconStarsForRating sx={{fill: 'white'}}/>;
        counter.push(svgIcon);
    }
    return counter;
}

export const SectionInformationMovie = ({movieGuide = [], genres = [], movieRating, languages, dateRelease}) => {


    const findJob = useCallback((job = '', whatValuePropertyReturn = 'profile_path') => {
        const element = movieGuide.find(ele => ele['job'] === job);
        if (element) {
            if (whatValuePropertyReturn === 'profile_path') {
                return element[whatValuePropertyReturn] ? `https://image.tmdb.org/t/p/w780${element[whatValuePropertyReturn]}` : '/placeholderImage/6.jpg';
            }
            return element[whatValuePropertyReturn] ?? 'нет информации';
        } else {
            return whatValuePropertyReturn === 'profile_path' ? '/placeholderImage/6.jpg' : 'нет информации';
        }
    }, [movieGuide]);

    return (
        <Box
            sx={{
                padding: '40px',
                backgroundColor: '#2a2a2a',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                rowGap: '30px',
            }}
        >
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <IconCalendar
                        sx={{
                            ...svgStyled,
                        }}
                    />
                    <Typography
                        sx={{
                            ...titleStyle
                        }}
                    >
                        Released Year
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        ...informationStaling,
                    }}
                >
                    {dateRelease ?? 'нет информации'}
                </Typography>
            </Box>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <IconTranslate
                        sx={{
                            ...svgStyled,
                        }}
                    />
                    <Typography
                        sx={{
                            ...titleStyle
                        }}
                    >
                        Available Languages
                    </Typography>
                </Box>
                <Box
                    component="ul"
                    sx={{
                        padding: 0,
                        listStyle: 'none',
                        display: 'flex',
                        gap: '10px',
                        ...informationStaling,
                    }}
                >
                    {languages.map((ele, index) => {
                        const {name} = ele;
                        return (
                            <Box
                                key={index}
                                component={'li'}
                            >
                                <Button
                                    variant={'contained'}
                                    sx={{
                                        backgroundColor: 'black',
                                        minWidth: 0,
                                    }}
                                >
                                    {name}
                                </Button>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <IconRating
                        sx={{
                            ...svgStyled,
                        }}
                    />
                    <Typography
                        sx={{
                            ...titleStyle
                        }}
                    >
                        Ratings
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <Box
                        sx={{
                            mt: '10px',
                            backgroundColor: '#181818',
                            padding: '10px',
                            width: '100%',
                            borderRadius: '10px',

                        }}
                    >
                        <Typography
                            sx={{
                                ...titleStyle
                            }}
                        >
                            IMDb
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: '14px',
                                columnGap: '20px',
                            }}
                        >
                            <Box
                                component={'ul'}
                                sx={{
                                    padding: 0,
                                    listStyle: 'none',
                                    display: 'flex',

                                }}
                            >
                                {ratingStars(10, +movieRating,{fill: 'red'}).map((ele, index) => {
                                    return (
                                        <Box
                                            key={index}
                                            component={'li'}
                                        >
                                            {ele}
                                        </Box>
                                    )
                                })}
                            </Box>
                            <Typography>
                                {movieRating}
                            </Typography>
                        </Box>
                    </Box>
                    {/*<Box>*/}
                    {/*    <Typography>*/}
                    {/*        Streamvibe*/}
                    {/*    </Typography>*/}
                    {/*</Box>*/}
                </Box>
            </Box>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <IconGenres
                        sx={{
                            ...svgStyled,
                        }}
                    />
                    <Typography
                        sx={{
                            ...titleStyle
                        }}
                    >
                        Genres
                    </Typography>
                </Box>
                <Box
                    component={'ul'}
                    sx={{
                        padding: 0,
                        listStyle: 'none',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        ...informationStaling,
                    }}
                >
                    {genres.map(ele => {
                        const {id, name} = ele
                        return (
                            <Box
                                key={id}
                                componnet={'li'}
                            >
                                <Button
                                    variant={'contained'}
                                    sx={{
                                        backgroundColor: '#181818',
                                    }}
                                >
                                    {name}
                                </Button>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
            <Box>
                <Typography>
                    Director
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        backgroundColor: '#181818',
                        padding: '14px',
                        borderRadius: '10px',
                        alignItems: 'center',
                        columnGap: '20px',
                        ...informationStaling,
                    }}
                >
                    <ImageMUI
                        src={findJob('Producer', 'profile_path')}
                        alt={''}
                        width={56}
                        height={60}
                        sx={{
                            objectFit: 'cover',
                            borderRadius: '10px',
                            border: '1px solid #4A4A4A',
                        }}
                    />
                    <Typography>
                        {findJob('Producer', 'name')}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography>
                    Music
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        backgroundColor: '#181818',
                        padding: '14px',
                        borderRadius: '10px',
                        alignItems: 'center',
                        columnGap: '20px',
                        ...informationStaling,
                    }}
                >
                    <ImageMUI
                        src={findJob('Original Music Composer', 'profile_path')}
                        alt={''}
                        width={56}
                        height={60}
                        sx={{
                            objectFit: 'cover',
                            borderRadius: '10px',
                            border: '1px solid #4A4A4A',
                        }}
                    />
                    <Typography>
                        {findJob('Original Music Composer', 'name')}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}