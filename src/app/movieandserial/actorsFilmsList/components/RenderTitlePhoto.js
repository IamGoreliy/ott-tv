'use client';
import {Box, Button, Typography} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";
import {useCallback, useEffect, useState} from "react";
import {IconArrowForBtn} from "@/utils/createSvg";

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

const stylingTableContents = {
    display: 'block',
    width: '100px',
}

export const RenderTitlePhotoAndDescriptionActor = ({dataForActor}) => {
    const {images: {profiles}, biography, birthday, deathday, gender, name, place_of_birth: placeOfBirth, popularity} = dataForActor;
    const [imageNum, setImageNum] = useState(0);
    const [imageRef, setImageRef] = useState(() => mobileSize.startPath + profiles[imageNum]["file_path"] ?? '');
    const [showDesc, setShowDesc] = useState(true);


    useEffect(() => {
        if (imageRef !== mobileSize.startPath + profiles[imageNum]["file_path"]){
            setImageRef(() => mobileSize.startPath + profiles[imageNum]["file_path"]);
        }
    }, [dataForActor, imageNum]);

    useEffect(() => {
        const idInterval = setInterval(() => {
            setImageNum(prevState => profiles.length - 1 > prevState ? prevState + 1 : 0);
        }, 10000);

        return () => clearInterval(idInterval);
    }, [imageNum]);

    return (
        <Box
            sx={{
                backgroundColor: 'red',
                borderRadius: '20px',
                padding: '10px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    columnGap: {xs: 'unset', md: '20px'},
                    height: showDesc ? '475px' : '0px',
                    overflow: 'auto',
                    transition: 'height 1000ms linear',
                }}
            >
                <Box
                    sx={{
                        // flexBasis: {xs: '100%', md: '40%'}
                        position: 'relative',
                    }}
                >
                    <Button
                        onClick={() => setImageNum(prevState => prevState === 0 ? profiles.length - 1 : prevState - 1)}
                        sx={{
                            position: 'absolute',
                            bottom: "10px",
                            left: 0,
                        }}
                    >
                        <IconArrowForBtn/>
                    </Button>
                    <ImageMUI
                        src={imageRef}
                        alt={''}
                        width={mobileSize.imageWidth}
                        height={mobileSize.imageHeight}
                        sx={{

                            borderRadius: '12px',
                        }}
                    />
                    <Button
                        onClick={() => setImageNum(prevState => profiles.length - 1 > prevState ? prevState + 1 : 0)}
                        sx={{
                            position: 'absolute',
                            bottom: '10px',
                            right: 0,
                        }}
                    >
                        <IconArrowForBtn
                            sx={{
                                transform: 'rotate(-180deg)',
                            }}
                        />
                    </Button>
                </Box>
                <Box
                    sx={{
                        // flexBasis: {xs: '100%', md: '40%'},
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '10px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'end',
                            columnGap: '20px',
                            padding: '10px',
                            backgroundColor: 'black',
                            borderRadius: '20px',
                            minHeight: '50px',
                        }}
                    >
                        <Typography
                            sx={{
                                ...stylingTableContents
                            }}
                        >
                            name:
                        </Typography>
                        <Typography
                            variant={'h5'}
                        >
                            {name}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'end',
                            columnGap: '20px',
                            padding: '10px',
                            backgroundColor: 'black',
                            borderRadius: '20px',
                            minHeight: '50px',

                        }}
                    >
                        <Typography
                            sx={{
                                ...stylingTableContents
                            }}
                        >
                            date:
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                columnGap: '10px',
                            }}
                        >
                            <Typography
                                variant={'h5'}
                            >
                                {birthday}
                            </Typography>
                            <Typography
                                variant={'h5'}
                            >
                                -
                            </Typography>
                            <Typography
                                variant={'h5'}
                            >
                                {deathday ?? 'н.в.'}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'end',
                            columnGap: '20px',
                            padding: '10px',
                            backgroundColor: 'black',
                            borderRadius: '20px',
                            minHeight: '50px',
                        }}
                    >
                        <Typography
                            sx={{
                                ...stylingTableContents
                            }}
                        >
                            place of birth:
                        </Typography>
                        <Typography
                            variant={'h5'}
                        >
                            {placeOfBirth}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'start',
                            columnGap: '40px',
                            padding: '10px',
                            backgroundColor: 'black',
                            borderRadius: '20px',
                            maxHeight: '280px',
                            overflow: 'auto',
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
                        <Typography
                            sx={{
                                ...stylingTableContents
                            }}
                        >
                            biography:
                        </Typography>
                        <Typography
                            variant={'h5'}
                        >
                            {biography}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    textAlign: 'center',
                }}
            >
            <Button
                onClick={() => setShowDesc(!showDesc)}
                variant={"contained"}
                sx={{
                    width: '150px',
                    backgroundColor: 'black',
                }}
            >
                {showDesc ? 'close' : 'open'}
            </Button>
            </Box>
        </Box>
    )
}