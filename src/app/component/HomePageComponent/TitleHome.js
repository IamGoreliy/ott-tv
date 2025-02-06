'use client';
import {Box, Button, Typography} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";
import {IconLogoPart1, IconLogoPart2, IconPlay} from "@/utils/createSvg";
import {useEffect, useLayoutEffect, useState} from "react";

const titleImg = [
    {
        urlImg: '/images/homePage/title/title1.png',
        width: 1920,
        height: 200,
    },
    {
        urlImg: '/images/homePage/title/title2.png',
        width: 1920,
        height: 200,
    },
    {
        urlImg: '/images/homePage/title/title3.png',
        width: 1920,
        height: 200,
    },
    {
        urlImg: '/images/homePage/title/title4.png',
        width: 1920,
        height: 200,
    },
];

// 🌈🌈🌈Styling component start🌈🌈🌈

const listStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    rowGap: '15px',
};

const titleH1 = {
    fontSize: {xs: '28px', lg: '58px'},
    fontWeight: '700',
    fontFamily: 'Manrope, sans-serif',
};

const subTitle = {
    maxWidth: '1096px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: {xs: '14px', lg: '18px'},
    fontWeight: '400',
    fontFamily: 'Manrope, sans-serif',
    color: '#999999',

};

const stylingBtnStartWatch = {
    marginTop: '50px',
    backgroundColor: 'red',
    color: 'white',
    textTransform: 'none',
    height: '45px',

}

// 🌈🌈🌈Styling component end🌈🌈🌈



export const TitleHome = () => {
    const [heightTitleImgSection, setHeightTitleImgSection] = useState(200);
    const [heightTitleThumb, setHeightTitleThumb] = useState('100%');
    const [logoSize, setLogoSize] = useState(1);

    useLayoutEffect(() => {
        const sizeWindow = document.body.offsetWidth;
        if (sizeWindow !== 1920) {
            const currentHeightTitleImg = 200 * (sizeWindow / 1920);
            setHeightTitleImgSection(currentHeightTitleImg);
            setLogoSize(sizeWindow / 1920)
        }
    }, []);


    useEffect(() => {
        const listElement = document.querySelector('#list');
        const test = listElement.offsetHeight;
        setHeightTitleThumb(test);
    }, [heightTitleImgSection]);

    return (
        <Box>
            <Box
                id={'list'}
                component={'ul'}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    ...listStyle,
                }}
            >
                {titleImg.map((ele, index) => {
                    const {urlImg, width, height} = ele;
                    return (
                        <Box
                            key={index}
                            component={'li'}
                        >
                            <ImageMUI
                                src={urlImg}
                                alt={''}
                                width={width}
                                height={height}
                                sx={{
                                    width: '100%',
                                    height: `${heightTitleImgSection}px`,
                                }}
                            />
                        </Box>
                    )
                })}
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    // backgroundColor: 'red',

                    boxShadow: '-1px 0px 200px 60px rgba(0,0,0,0.75) inset',
                    width: '100%',
                    height: heightTitleThumb,

                }}
            >
                <IconLogoPart1
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: () =>  (470 * logoSize) + 'px',
                        height: () =>  (470 * logoSize) + 'px',
                    }}
                />
                <IconLogoPart2
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: () => (159 * logoSize) + 'px',
                        height: () => (159 * logoSize) + 'px',
                    }}
                />
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    mt: () => (heightTitleThumb - 50) + 'px',
                    // position: 'absolute',
                    // bottom: 0,
                    // left: 0,
                    textAlign: 'center',

                }}
            >
                <Typography
                    variant={'h1'}
                    sx={{
                        ...titleH1,
                    }}
                >
                    The Best Streaming Experience
                </Typography>
                <Typography
                    variant={'subtitle1'}
                    sx={{
                        ...subTitle,
                    }}
                >
                    StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
                </Typography>
                <Button
                    variant={'contained'}
                    sx={{
                        ...stylingBtnStartWatch,
                    }}

                >
                    <IconPlay
                        sx={{
                            marginRight: '5px'
                        }}
                    />
                    Start Watching Now
                </Button>
            </Box>
        </Box>
    )
}

//logo
