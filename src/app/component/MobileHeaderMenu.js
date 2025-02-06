import {Box, Button} from "@mui/material";
import Link from "next/link";
import {CloseModalIcon} from "@/utils/createSvg";

const btnNavForMobile = [
    {
        id: 1,
        name: 'Home',
        link: '/',
    },
    {
        id: 2,
        name: 'Movie & Shows',
        link: '/movieandserial',
    },
    {
        id: 3,
        name: 'Support',
        link: '/',
    },
    {
        id: 4,
        name: 'Subscribe',
        link: '/',
    },
]

export const MobileHeaderMenu = ({stateOpenMobileMenu, toggleMenu}) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: stateOpenMobileMenu ? 0 : '-100%',
                left: 0,
                width: '100%',
                paddingTop: '30px',
                paddingBottom: '30px',
                zIndex: 3,
                transition: 'top 1000ms linear',
                backgroundColor: 'red',
                borderRadius: '0px 0px 20px 20px',
            }}
        >
            <Button
                onClick={toggleMenu}
                sx={{
                    ml: '85%',
                    position: 'absolute',
                    top: '10px',
                    right: '10px',

                }}
            >
                <CloseModalIcon
                    sx={{
                        width: '30px',
                        height: '30px',
                        fill: 'white',
                    }}
                />
            </Button>
            <Box
                component="ul"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    rowGap: '20px',
                    padding: '0px',
                    listStyle: 'none'
                }}
            >
                {btnNavForMobile.map(item => {
                    const {id, name, link} = item;
                    return (
                        <Box
                            key={id}
                            component='li'
                        >
                            <Button
                                href={link}
                                sx={{
                                    fontSize: '18px',
                                    fontFamily: 'Manrope, sans-serif',
                                    color: 'white',
                                }}
                            >
                                {name}
                            </Button>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}