'use client';
import {Box, Button, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {YoutubePlayerComponent} from "@/utils/YoutubePlayerComponent";
import {useEffect, useState} from "react";

// start styling

const titleStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    color: '#999999',
}

const svgStyling = {
    width: '15px',
    height: '15px',
}

// end styling

const languageForSelect = [
    {
        id: 0,
        name: 'US',
        value: 'en-US',
    },
    {
        id: 1,
        name: 'ru',
        value: 'ru-RU',
    },
];

export const SectionReviews = ({refTrailer, changeLan}) => {
    const [stateLang, setStateLang] = changeLan;

    return (
        <Box
            sx={{
                padding: '40px',
                backgroundColor: '#2a2a2a',
                borderRadius: '10px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        ...titleStyle,
                    }}
                >
                    Trailer
                </Typography>
                <Box>
                    <InputLabel id="set-language-label"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.5)',
                            fontSize: '12px',
                        }}
                    >
                        Language
                    </InputLabel>
                    <Select
                        labelId="set-language-label"
                        id="set-language"
                        value={stateLang}
                        onChange={({target: {value}}) => setStateLang(value)}
                        autoWidth
                        label="Language"
                        variant={'standard'}
                        sx={{
                            width: '80px',
                            color: 'white',
                            "&::before": {
                                borderColor: 'black',
                            },
                            "&:hover:not(.Mui-disabled)::before": {
                                borderColor: 'red',
                            },
                            '&::after': {
                                borderColor: 'red',
                            },

                            '&:hover .MuiSelect-icon': {
                                fill: 'red',
                            },
                            "& .MuiSelect-iconOpen":{
                                fill: 'red',
                            },

                        }}

                        >
                        <MenuItem value="US">
                            <em>{stateLang}</em>
                        </MenuItem>
                        {languageForSelect.map(ele => {
                            const {id, name, value} = ele;
                            return (
                                <MenuItem
                                    key={id}
                                    value={value}
                                >
                                    {name}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </Box>
            </Box>
            <Box
                component={'ul'}
                sx={{
                    padding: 0,
                    listStyle: 'none',
                    mt: '20px',
                }}
            >
                <YoutubePlayerComponent videoId={refTrailer?.key}/>
            </Box>
        </Box>
    )
}