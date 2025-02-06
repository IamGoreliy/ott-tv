import {Box, Typography} from "@mui/material";
import Link from "next/link";

//🦄🦄🦄 styling start

const listTitle = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '20px',
    lineHeight: 1.5,
    fontWeight: 600,
    color: 'white',
}

const listDesc = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '18px',
    lineHeight: 1.5,
    fontWeight: 400,
    color: '#999999',
}

//🦄🦄🦄 styling end

export const RenderFooterReference = ({titleSection = '', arrReference = []}) => {
    return (
        <Box
            sx={{
                flexBasis: {xs: 'calc(100% / 2)', md: 'calc(100% / 6)'},
                textAlign: 'center',
            }}
        >
            <Typography
                sx={{
                    ...listTitle,
                }}
            >
                {titleSection}
            </Typography>
            <Box
                component={'ul'}
                sx={{
                    padding: 0,
                    listStyle: 'none',
                    mt: '24px',
                }}
            >
                {arrReference.length && arrReference.map(ele => {
                    const {id, name, link} = ele;
                    return (
                        <Box
                            key={id}
                            component={'li'}
                            sx={{
                                '& + &' : {
                                    marginTop: '14px',
                                },
                            }}
                        >
                            <Link
                                href={link}
                                style={{
                                    ...listDesc,
                                }}
                            >
                                {name}
                            </Link>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}