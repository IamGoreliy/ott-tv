import {Box, Button} from "@mui/material";

export const MobileHeaderMenu = ({stateOpenMobileMenu, toggleMenu}) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: stateOpenMobileMenu ? 0 : '-100%',
                left: 0,
                width: '100%',
                height: '200px',
                zIndex: 3,
                // transform: 'translateY(-50%)',
                transition: 'top 1000ms linear',
                backgroundColor: 'red',
            }}
        >
            <Button
                onClick={toggleMenu}
            >
                X
            </Button>
        </Box>
    )
}