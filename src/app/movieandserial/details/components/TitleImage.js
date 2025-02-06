'use client';
import {Box, Button, Typography} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";
import {useCallback, useEffect, useState} from "react";
import {IconLike, IconPlay, IconPlus, IconVolume} from "@/utils/createSvg";

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

const initialState = {
    startPath: '',
    imageWidth: '',
    imageHeight: '',
}

//styling component

const titleStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: {xs: '24px', md: '30px', lg:'38px'},
    fontWeight: 'bold',
    lineHeight: 1.5,
    color: 'white',
};

const descriptionFilmStyle = {
    display: {xs: 'none', md: 'unset'},
    fontFamily: 'Manrope, sans-serif',
    fontSize: {xs: '0px', md: '16px', lg:'18px'},
    fontWeight: 'bold',
    lineHeight: 1.5,
    color: 'white',
};

const btnPlayStyling = {
    backgroundColor: 'red',
    color: 'white',
};

const auxiliaryBtnStyling = {
    backgroundColor: 'black',
    minWidth: 0,
}


export const TitleImage = ({dataForImg}) => {
    const {backdrop_path: backdropPath, poster_path: posterPath, original_title: originalTitle, tagline} = dataForImg;
    const [imgOption, setImgOption] = useState(null);


    const handlerResize = useCallback(() => {
        const windowSize = window.document.body.offsetWidth;
        if (windowSize < 900) {
            setImgOption(mobileSize);
        } else {
            setImgOption(pcSize);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handlerResize);

        handlerResize();

        return () => window.removeEventListener("resize", handlerResize);

    }, []);

    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                }}
            >
                {imgOption &&
                    <ImageMUI
                        src={`${imgOption?.startPath}${backdropPath}`}
                        alt=''
                        width={imgOption?.imageWidth}
                        height={imgOption?.imageHeight}
                        sx={{
                            width: '100%',
                            // height: '100%',
                            objectFit: 'cover   ',
                        }}
                    />
                }
                <Box
                    sx={{
                        display: {xs: 'none', md: 'block'},
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        boxShadow: 'inset 0px 0px 300px 50px rgba(0,0,0,0.75)',
                    }}
                />
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: {xs: '30px', md: '20px'},
                        left: 0,
                    }}
                >
                    <Typography
                        sx={{
                            ...titleStyle,
                        }}
                    >
                        {originalTitle}
                    </Typography>
                    <Typography
                        sx={{
                            ...descriptionFilmStyle,
                        }}
                    >
                        {tagline}
                    </Typography>
                    <Box
                        sx={{
                            mt: '30px',
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            columnGap: {xs: '0px', md: '10px'},
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Button
                                variant={'contained'}
                                sx={{
                                    ...btnPlayStyling,

                                }}
                            >
                                <IconPlay/>
                                Play Now
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                mt: {xs: '20px', md: '0px'},
                                display: 'flex',
                                columnGap: '10px',
                            }}
                        >
                            <Button
                                variant={'contained'}
                                sx={{
                                    ...auxiliaryBtnStyling,
                                }}
                            >
                                <IconPlus/>
                            </Button>
                            <Button
                                variant={'contained'}
                                sx={{
                                    ...auxiliaryBtnStyling,
                                }}
                            >
                                <IconLike/>
                            </Button>
                            <Button
                                variant={'contained'}
                                sx={{
                                    ...auxiliaryBtnStyling,
                                }}
                            >
                                <IconVolume/>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}