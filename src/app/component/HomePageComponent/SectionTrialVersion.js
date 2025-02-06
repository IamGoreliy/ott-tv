import {Box, Button, Typography} from "@mui/material";
import {BackgroundMaker} from "@/app/component/HomePageComponent/utils/BackgroundMaker";

const imageForBackground = [
    '/images/homePage/sectionStartTrial/image1.png',
    '/images/homePage/sectionStartTrial/image2.png',
    '/images/homePage/sectionStartTrial/image3.png',
    '/images/homePage/sectionStartTrial/image4.png',
];

// 🦄🦄🦄 styling start

const titleStyling = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: {xs: '24px', md: '48px'},
    fontWeight: 700,
    lineHeight: 1.5,
    color: 'white',
}

const descStyling = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: {xs: '14px', md:'18px'},
    marginTop: {xs: '10px', md: 'unset'},
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#999999',
}

const btnSubscribeStyling = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: 1.5,
    color: 'white',
    borderRadius: '8px',
}

// 🦄🦄🦄 styling end

export const SectionTrialVersion = () => {
    return (
        <Box
            sx={{
                padding: {xs: '40px 0px', md: '50px 0 100px'},
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    height: '313px',
                    overflow: 'hidden',
                    background: 'linear-gradient(90deg, rgba(15,15,15,1) 2%, rgba(20,15,15,0.97) 16%, rgba(34,14,14,0.91) 28%, rgba(229,0,0,0.3477766106442577) 100%)',
                    borderRadius: '12px',
                }}
            >
                <BackgroundMaker
                    arrImage={imageForBackground}
                    parametersImg={[1646, 84]}
                />
                <Box
                    sx={{
                        padding: {xs: '50px 50px', md:'100px 80px'},
                        display: 'flex',
                        flexDirection: {xs: 'column', md: 'row'},
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            textAlign: {xs: 'center', md: 'unset'},
                        }}
                    >
                        <Typography
                            sx={{
                                ...titleStyling,
                            }}
                        >
                            Start your free trial today!
                        </Typography>
                        <Typography
                            sx={{
                                ...descStyling,
                            }}
                        >
                            This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
                        </Typography>
                    </Box>
                    <Button
                        variant={'contained'}
                        sx={{
                            mt: {xs: '20px', md: 'unset'},
                            ml: {xs: 'unset', md:'auto'},
                            height: '63px',
                            backgroundColor: 'red',
                            color: 'white',
                            textTransform: 'none',
                            ...btnSubscribeStyling,
                        }}
                    >
                        Start a Free Trail
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}