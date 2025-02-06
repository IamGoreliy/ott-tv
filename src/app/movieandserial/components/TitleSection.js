import {useCallback, useContext, useEffect, useRef, useState} from "react";
import {MovieData} from "@/app/movieandserial/template";
import {optionImage} from "@/utils/optionServerImage";
import {Box, Button, Typography} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";
import styled from "@emotion/styled";
import {IconArrowForBtn, IconLike, IconPlay, IconPlus, IconVolume} from "@/utils/createSvg";

// 🍉🍉🍉Styling Start🍉🍉🍉

const titleFilmNameStyling = {
    textAlign: "center",
    fontFamily: 'Manrope, sans-serif',
    fontSize: {xs: '24px', md: '30px', lg: '38px'},
    lineHeight: '1.5',
    fontWeight: 700,
    color: 'white'
};

const descriptionFilmNameStyling = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: {xs: '14px', md: '16px', lg: '18px'},
    lineHeight: '1.5',
    fontWeight: 700,
    color: '#999999',
};

const BackgroundGradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0) 100%);
`;

const btnPlayStyling = {
    height: '57px',
    color: 'white',
    backgroundColor: 'red',
};

const auxiliaryButtons = {
    backgroundColor: 'black',
    color: 'white',
}

//🍉🍉🍉Styling End🍉🍉🍉

const initialState = {
    startPath: '',
    imageWidth: '',
    imageHeight: '',
}

export const TitleSection = () => {
    const {results} = useContext(MovieData);
    const [movieForTitle, setMovieForTitle] = useState(0);
    const [baseOptionForImage, setBaseOptionsForImage] = useState(initialState);
    const scrollBarRef = useRef();


    const handleResize = useCallback(() => {
        const currentWidthBody = document.body.offsetWidth;
        if (currentWidthBody < 800) {
            setBaseOptionsForImage({
                startPath: 'https://image.tmdb.org/t/p/w780',
                imageWidth: '480',
                imageHeight: '400',
            })
        } else {
            setBaseOptionsForImage(
                {
                    startPath: 'https://image.tmdb.org/t/p/original',
                    imageWidth: '1280',
                    imageHeight: '700',
                }
            )
        }
    }, [])


    useEffect(() => {
        addEventListener('resize', handleResize);

        handleResize();

        return () => removeEventListener("resize", handleResize);

    }, []);

    useEffect(() => {
            const intervalID = setInterval(() => {
                if (movieForTitle < 19) {
                    setMovieForTitle(movieForTitle + 1);
                } else {
                    setMovieForTitle(0);
                }
            }, 10000);

            return () => clearInterval(intervalID);
    }, [movieForTitle])

    const scrollBarClicker = useCallback((event) => {
        const positionCursor = event.layerX;
        const percentResultClickUser = Math.round(( positionCursor / 300 ) * 100);
        const value = () => Math.round(percentResultClickUser / 5 - 1) > 0 ? Math.round(percentResultClickUser / 5 - 1) : 0
            setMovieForTitle(value);
    }, [])

    useEffect(() => {
        const scrollBarHTMLBlock = scrollBarRef.current;
        const handleScrollBarListener = (e) => scrollBarClicker(e)
        scrollBarHTMLBlock.addEventListener('click', handleScrollBarListener);

        return () => scrollBarHTMLBlock.removeEventListener('click', handleScrollBarListener);
    }, [])


    const handleUp = useCallback(() => {
        setMovieForTitle(prevState => {
            if (prevState < 19) {
                return prevState + 1;
            }
            return prevState;
        });
    }, []);

    const handleDown = useCallback(() => {
        setMovieForTitle(prevState => {
            if (prevState > 0) {
                return prevState - 1;
            }
            return prevState;
        });
    }, []);

    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                    maxWidth: '1280',
                    height: {xs: '380px', md: '835px'},
                }}
            >
                { results &&
                    <ImageMUI
                        src={`${baseOptionForImage.startPath}${results?.[movieForTitle]?.['backdrop_path']}`}
                        alt={''}
                        width={baseOptionForImage.imageWidth}
                        height={baseOptionForImage.imageHeight}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: '12px',
                            objectFit: 'cover',
                        }}
                    />
                }
                <BackgroundGradient/>
                <Box
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        bottom: {xs: '20px', md: '130px'},
                        transform: 'translateX(-50%)',
                    }}
                >
                    <Typography
                        sx={{
                            ...titleFilmNameStyling,
                        }}
                    >
                        {results?.[movieForTitle]?.['original_title']}
                    </Typography>
                    <Typography
                        sx={{
                            display: {xs: 'none', md: 'inline'},
                            ...descriptionFilmNameStyling,
                        }}
                    >
                        {results?.[movieForTitle]?.overview}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            justifyContent: 'center',
                            mt: '30px',
                            columnGap: '20px',
                        }}
                    >
                        <Button
                            sx={{
                                ...btnPlayStyling
                            }}
                        >
                            <IconPlay/>&nbsp;Play Now
                        </Button>
                        <Box
                            sx={{
                                mt: {xs: '20px', md: '0px'},
                                display: 'flex',
                                columnGap: {xs: '20px', md: 'unset'},
                            }}
                        >
                            <Button
                                sx={{
                                    ...auxiliaryButtons
                                }}
                            >
                                <IconPlus/>
                            </Button>
                            <Button
                                sx={{
                                    ...auxiliaryButtons
                                }}
                            >
                                <IconLike/>
                            </Button>
                            <Button
                                sx={{
                                    ...auxiliaryButtons
                                }}
                            >
                                <IconVolume/>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: {xs: '170px', md: 0},
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: {xs: '0px 10px 0px 10px', md: '0px 50px 20px 50px'},
                    }}
                >
                    <Button
                        onClick={handleDown}
                        sx={{
                            minWidth: 0,
                            width: '56px',
                            height: '56px',
                            backgroundColor: {xs: 'RGBA(0, 0, 0, 0.4)', md: 'black'}
                        }}
                    >
                        <IconArrowForBtn/>
                    </Button>
                    <Box
                        ref={scrollBarRef}
                        sx={{
                            display: {xs: 'none', md: 'block'},
                            position: 'relative',
                            width: '300px',
                            height: '6px',
                            borderRadius: '20px',
                            backgroundColor: 'green',
                            cursor: 'pointer',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                width: (movieForTitle+1) * 5 + '%',
                                height: '100%',
                                borderRadius: '20px',
                                backgroundColor: 'red',
                            }}
                        />
                    </Box>
                    <Button
                        onClick={handleUp}
                        sx={{
                            minWidth: 0,
                            width: '56px',
                            height: '56px',
                            backgroundColor: {xs: 'RGBA(0, 0, 0, 0.4)', md: 'black'}
                        }}
                    >
                        <IconArrowForBtn
                            sx={{
                                transform: 'rotate(-180deg)',
                            }}
                        />
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}