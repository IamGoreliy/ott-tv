'use client';
import {Box, Button, Typography} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";
import {useCallback} from "react";
import Link from "next/link";

const mobileSize = {
    startPath: 'https://image.tmdb.org/t/p/w780',
    imageWidth: '358',
    imageHeight: '268',
}

export const MiniListForFilter = ({data = [], inputValue = '', selectedTab}) => {

    const checkingImage = useCallback( (imageMovie, poster, imageActor) => {
        if (imageMovie !== undefined) {
            return imageMovie ? `${mobileSize.startPath}${imageMovie}` : poster ? `${mobileSize.startPath}${poster}` : '/placeholderImage/6.jpg';
        }
        return imageActor ? `${mobileSize.startPath}${imageActor}` : '/placeholderImage/6.jpg';
    }, []);

    return (
        <Box
            component='ul'
            sx={{
                padding: '10px',
                listStyle: 0,
                width: '100%',
                height: '100%',
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                '&::-webkit-scrollbar-track': {
                    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.9)',
                    borderRadius: '10px',
                    backgroundColor: '#CCCCCC',
                },
                '&::-webkit-scrollbar': {
                    width: '10px',
                    backgroundColor: 'red',
                },
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: '10px',
                    backgroundColor: '#D62929',
                    border: '1px solid white',
                    // backgroundColor: 'black',
                    backgroundImage: 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.4) 50%,transparent,transparent)',
                },
            }}
        >
            {data.map(ele => {
                const {id, backdrop_path: backdropPath, poster_path: posterPath, name, original_title: originalTitle, profile_path: profilePath} = ele;
                return (
                    <Box
                        key={id}
                        component='li'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '20px',
                            padding: '10px',
                            width: '100%',
                            height: '70px',
                            boxShadow: '3px 3px 5px -4px rgba(0,0,0,0.75)',
                            borderRadius: '12px',
                            backgroundColor: 'rgba(240, 240, 240, 1)',

                        }}
                    >
                        <ImageMUI
                            src={checkingImage(backdropPath, posterPath, profilePath)}
                            alt={name ?? 'No information'}
                            width={mobileSize.imageWidth}
                            height={mobileSize.imageHeight}
                            sx={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                            }}
                        />
                        <Typography
                            variant={'h7'}
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            {name ?? originalTitle}
                        </Typography>
                    </Box>
                )
            })}
            {data.length > 0 &&
                <Button
                  variant='contained'
                  sx={{
                      backgroundColor: 'red',
                      color: 'white',
                  }}
                >
                    <Link
                        href={`/movieandserial/searchMovie/${inputValue}?searchTab=${selectedTab}`}
                        prefetch={true}
                    >
                        view all
                    </Link>
                </Button>
            }
        </Box>
    )
}