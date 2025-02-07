'use client';
import {Box, Container, Typography} from "@mui/material";
import Link from "next/link";
import {RenderFooterReference} from "@/app/component/HomePageComponent/utils/RenderFooterReference";
import {IconFacebook, IconLinkedin, IconTwitter} from "@/utils/createSvg";
import styled from "@emotion/styled";

const referenceHome = [
    {
        id: 1,
        name: 'Categories',
        link: ''
    },
    {
        id: 2,
        name: 'Devices',
        link: ''
    },
    {
        id: 3,
        name: 'Pricing',
        link: ''
    },
    {
        id: 4,
        name: 'FAQ',
        link: ''
    },
];

const referenceMovies = [
    {
        id: 1,
        name: 'Gernes',
        link: ''
    },
    {
        id: 2,
        name: 'Trending',
        link: ''
    },
    {
        id: 3,
        name: 'New Release',
        link: ''
    },
    {
        id: 4,
        name: 'Popular',
        link: ''
    },
];

const referenceShows = [
    {
        id: 1,
        name: 'Gernes',
        link: ''
    },
    {
        id: 2,
        name: 'Trending',
        link: ''
    },
    {
        id: 3,
        name: 'New Release',
        link: ''
    },
    {
        id: 4,
        name: 'Popular',
        link: ''
    },
];

const referenceSubscription = [
    {
        id: 1,
        name: 'Plans',
        link: ''
    },
    {
        id: 2,
        name: 'Features',
        link: ''
    },
];

const socialLink = [
    {
        id: 1,
        name: (style = {}) =>  <IconFacebook sx={style}/>,
        link: ''
    },
    {
        id: 2,
        name: (style = {}) =>  <IconTwitter sx={style}/>,
        link: ''
    },
    {
        id: 3   ,
        name: (style = {}) => <IconLinkedin sx={style}/>,
        link: ''
    },
];


//🦄🦄🦄 styling start

const listTitle = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '20px',
    lineHeight: 1.5,
    fontWeight: 600,
    color: 'white',
}

const CustomLink = styled(props => {
    const {sx, href, ...other} = props;
    return <a
            href={href}
            {...other}
    />
})(({sx}) => {
    return {
        display: "inline-flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: '54px',
        height: '54px',
        backgroundColor: '#1A1A1A',
        '&:hover > svg': {
            fill: 'red',
        },
        ...sx,
    }
})

const HidingSpan = styled(props => {
    const {sx, ...other} = props;
    return <Box
        component={'span'}
        sx={{
            display: {xs: 'none', md: 'inline'},
            ...sx
        }}
        {...other}
    />
})();

const SignaturesFooter = styled.span`
    width: 2px;
    height: auto;
    background-color: #262626;
    
`

//🦄🦄🦄 styling end


export const Footer = () => {
    return (
            <Box
                id={'footer'}
                sx={{
                    backgroundColor: '#0F0F0F',
                    mt: '50px',
                    padding: '100px 0px',
                }}
            >
                <Container
                    maxWidth={'xl'}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: {xs: 'wrap', md: 'unset'},
                            rowGap: {xs: '40px', md: 'unset'},

                        }}
                    >
                        <RenderFooterReference titleSection={'Home'} arrReference={referenceHome}/>
                        <RenderFooterReference titleSection={'Movies'} arrReference={referenceMovies}/>
                        <RenderFooterReference titleSection={'Shows'} arrReference={referenceShows}/>
                        <RenderFooterReference titleSection={'Support'} arrReference={[{id: 1, name: 'Contact Us', link: ''}]}/>
                        <RenderFooterReference titleSection={'Subscription'} arrReference={referenceSubscription}/>
                        <Box
                            sx={{
                                flexBasis: 'calc(100% / 6)',
                            }}
                        >
                            <Typography
                                sx={{
                                    ...listTitle
                                }}
                            >
                                Connect With Us
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    mt: '24px',
                                    columnGap: '10px',
                                }}
                            >
                                {socialLink.map(ele => {
                                    const {id, name, link} = ele;
                                    return (
                                        <Box
                                            key={id}
                                        >
                                            <CustomLink
                                                href={link}
                                                sx={{
                                                    display: "inline-flex",
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: '54px',
                                                    height: '54px',
                                                    backgroundColor: '#1A1A1A',
                                                    '&:hover > svg': {
                                                        fill: 'red',
                                                    },
                                                }}
                                            >
                                                {
                                                    name({
                                                        width: '24px',
                                                        height: '24px',
                                                        fill: 'white',
                                                    })
                                                }
                                            </CustomLink>
                                        </Box>
                                    )
                                })}
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            textAlign: 'center',
                            mt: {xs: '50px', md:'100px'},
                        }}
                    >
                        <Box
                            sx={{
                                paddingTop: {xs: '20px', md: '24px'},
                                borderTop: '2px solid #262626',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: {xs: '14px', md: '18px'},
                                    fontFamily: 'Manrope, sans-serif',
                                    lineHeight: 1.5,
                                    color: '#999999',
                                }}
                            >
                                @2023 streamvib, All Rights Reserved
                                <HidingSpan>
                                &nbsp; Terms of Use
                                Privacy Policy
                                Cookie Policy
                                </HidingSpan>
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                ml: {xs: 'unset', md: 'auto'},
                                mt: {xs: '40px', md: 'unset'},
                                display: 'flex',
                                // columnGap: {xs: '32px', md: '40px'},
                                justifyContent: 'space-between',
                            }}
                        >
                            <Link href={'/'}>
                                Terms of Use
                            </Link>
                            <SignaturesFooter/>
                            <Link href={'/'}>
                                Privacy Policy
                            </Link>
                            <SignaturesFooter/>
                            <Link href={'/'}>
                                Cookie Policy
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>

    )
}