import {Box, Typography} from "@mui/material";

// start styling

const titleStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    color: '#999999',
}

const descStyling = {
    mt: '14px',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    color: 'white',
}

// end styling

export const SectionDescription = ({overviewText}) => {
    return (
        <Box
            sx={{
                padding: '40px',
                backgroundColor: '#2a2a2a',
                borderRadius: '10px',
            }}
        >
            <Typography
                sx={{
                    ...titleStyle,
                }}
            >
                Description
            </Typography>
            <Typography
                sx={{
                    ...descStyling,
                }}
            >
                {overviewText}
            </Typography>
        </Box>
    )
}