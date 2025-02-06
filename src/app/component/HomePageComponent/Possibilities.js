import {Box, Grid2, Typography} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";

// 🦄🦄🦄styling start🦄🦄🦄

const styleTitle = {
    fontSize: {xs: '20px', md:'38px'},
    fontWeight: 'bold',
    fontFamily: 'Manrope, sans-serif',
    lineHeight: '1.5',
    color: 'white',
};

const subTitle = {
    fontSize: '18px',
    fontWeight: '400',
    fontFamily: 'Manrope, sans-serif',
    color: '#999999',
    marginTop: '14px',
};

const productName = {
    fontSize: {xs: '18px', md: '24px'},
    color: 'white',
    fontFamily: 'Manrope, sans-serif',
}

const productDescription = {
    fontSize: {xs: '14px', md: '18px'},
    color: '#999999',
    fontFamily: 'Manrope, sans-serif',
    marginTop: {xs: '15px', md: '30px'},
}

// 🌈🌈🌈styling end🌈🌈🌈

const listDevice = [
    {
        id: 1,
        title: 'Smartphones',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icon: '/images/homePage/possibilities/iconMobile.png',
    },
    {
        id: 2,
        title: 'Tablet',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icon: '/images/homePage/possibilities/iconTablet.png',
    },
    {
        id: 3,
        title: 'Smart TV',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icon: '/images/homePage/possibilities/iconTV.png',
    },
    {
        id: 4,
        title: 'Laptops',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icon: '/images/homePage/possibilities/iconPC.png',
    },
    {
        id: 5,
        title: 'Gaming Consoles',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icon: '/images/homePage/possibilities/iconGamingConsole.png',
    },
    {
        id: 6,
        title: 'VR Headsets',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icon: '/images/homePage/possibilities/iconVR.png',
    },
]


export const Possibilities = () => {
    return (
        <Box
            sx={{
                padding: {xs: '40px 0px', md: '50px 0px 100px'},
            }}
        >
            <Box
                sx={{
                    textAlign: 'left',
                }}
            >
            {/*🦄🦄🦄title🦄🦄🦄*/}
                <Typography
                    sx={{
                        ...styleTitle
                    }}
                >
                    We Provide you streaming experience across various devices.
                </Typography>
                <Typography
                    sx={{
                        ...subTitle,
                    }}
                >
                    With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
                </Typography>
            </Box>
            <Grid2
                container
                spacing={2}
                sx={{
                    mt: '80px',
                }}

            >
                {listDevice.map(ele => {
                    const {id, title, description, icon} = ele;
                    return (
                        <Grid2
                            key={id}
                            size={{xs: 12, md: 4}}
                            sx={{
                                backgroundColor: 'black',
                                padding: {xs: '24px', md:'50px'},
                                borderRadius: '12px',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '32px',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '72px',
                                        height: '72px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#141414',
                                    }}
                                >
                                <ImageMUI
                                    src={icon}
                                    alt={'icon'}
                                    width={40}
                                    height={40}
                                />
                                </Box>
                                <Typography
                                    sx={{
                                        ...productName,
                                    }}
                                >
                                    {title}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        ...productDescription,
                                    }}
                                >
                                    {description}
                                </Typography>
                            </Box>
                        </Grid2>
                    )
                })}
            </Grid2>
        </Box>
    )
}