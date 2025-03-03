'use client';
import {Box, Button, Grid2, Typography} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";
import {useCallback, useState} from "react";
import {CloseModalIcon} from "@/utils/createSvg";
import {RenderDescriptionMovie} from "@/app/movieandserial/filmsList/component/renderDescriptionMovie";


const openDescInitialState = {
    id: null,
    isOpen: false,
};

const mobileSize = {
    startPath: 'https://image.tmdb.org/t/p/w780',
    imageWidth: '458',
    imageHeight: '468',
};

const pcSize = {
    startPath: 'https://image.tmdb.org/t/p/original',
    imageWidth: '1280',
    imageHeight: '700',
};

export const RenderList = ({filmList}) => {
    const [openDesc, setOpenDesc] = useState(openDescInitialState);
    const [whatSelectTabs, setWhatSelectTabs] = useState('cast');

    const handlerOpenDesc = useCallback((id) => {
        setOpenDesc(prevState => prevState.id === id ? openDescInitialState : {id, isOpen: true});
    }, []);

    return (
        <Box
            sx={{
                mt: '20px',
            }}
        >
            <Box
                sx={{
                    mt: '20px',
                    mb: '20px',
                    display: 'flex',
                    // justifyContent: 'space-between',

                    padding: '10px',
                    columnGap: '10px',
                }}
            >
                <Button
                    variant={'contained'}
                    onClick={() => setWhatSelectTabs('cast')}
                    sx={{
                        backgroundColor: whatSelectTabs === 'cast' ? 'red' : 'black',
                        border: whatSelectTabs === 'cast' ? '0px solid transparent' : '1px solid white',
                    }}
                >
                    actor
                </Button>
                <Button
                    variant={'contained'}
                    onClick={() => setWhatSelectTabs('crew')}
                    sx={{
                        backgroundColor: whatSelectTabs === 'crew' ? 'red' : 'black',
                        border: whatSelectTabs === 'crew' ? '0px solid transparent' : '1px solid white',
                    }}
                >
                    producer
                </Button>
            </Box>
            <Grid2
                container
                spacing={1}
                sx={{
                    position: 'relative',
                }}
            >
            {filmList[whatSelectTabs].length
                ? filmList[whatSelectTabs].map((ele, index) => {
                    const {id, backdrop_path: backdropPath, original_title: originalTitle, overview} = ele;
                    return (
                        <Grid2
                            key={index}
                            size={{
                                xs: 12,
                                md: 6,
                                xl: 4,
                            }}
                            sx={{

                            }}
                        >
                            <Box
                                onClick={() => handlerOpenDesc(id)}
                                sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    border: openDesc.id === id ? '2px solid red' : '1px solid white',
                                    borderRadius: '12px',
                                    padding: '10px',
                                    '&:hover': {
                                        border: '2px solid red',
                                    },
                                    overflow: 'hidden',
                                }}
                            >
                                <ImageMUI
                                    src={`${mobileSize.startPath}${backdropPath}`}
                                    alt={''}
                                    width={mobileSize.imageWidth}
                                    height={mobileSize.imageHeight}
                                    sx={{
                                        width: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                                <Box
                                    sx={{
                                        padding: '10px',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    }}
                                >
                                    <Typography
                                        variant={'h3'}
                                        sx={{
                                            textAlign: 'center',
                                            color: 'black',
                                        }}
                                    >
                                        {originalTitle}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    left: '0px',
                                    width: '100%',
                                    height: openDesc.id === id ? '400px' : '0px',
                                    transition: 'height 500ms linear',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: 0,
                                        backgroundColor: 'red',
                                        width: '100%',
                                        height: openDesc.id === id ? '400px' : '0px',
                                        border: openDesc.id === id ? '1px solid white' : '0px solid black',
                                        borderRadius: '12px',
                                        padding: openDesc.id === id ? '20px' : '0px',
                                        overflow: 'hidden',
                                        transition: 'height 500ms linear, padding 200ms linear 200ms',
                                    }}
                                >
                                    <Button
                                        onClick={() => setOpenDesc(openDescInitialState)}
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
                                        title={originalTitle}
                                        description={overview}
                                        closeMenuOpt={() => setOpenDesc(openDescInitialState)}
                                    />
                                </Box>
                            </Box>
                        </Grid2>
                    )
                })
                : <Typography>информации нет</Typography>
            }
            </Grid2>
        </Box>
    )
}