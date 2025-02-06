import {Box, Button, Typography} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";
import {IconArrowForBtn} from "@/utils/createSvg";

export const RenderCategoryForPC = ({ whatCategoryRender }) => {
    return (
        <Box
            component='ul'
            sx={{
                listStyle: 'none',
                padding: 0,
                display: {xs: 'none', md: 'flex'},
                justifyContent: 'space-between',
                columnGap: {xs: '20px', md: '10px'},
                mt: '80px',
                overflow: 'auto',
            }}
        >
            {whatCategoryRender && whatCategoryRender.map((item, index) => {
                const {genre, arr} = item;
                return (
                    <Box
                        key={index}
                        component='li'
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: {xs: '20px', md: '10px'},
                            backgroundColor: 'black',
                            // border: '1px solid white',
                            borderRadius: '12px',
                            paddingTop: '30px',
                            maxWidth: '280px',
                        }}
                    >
                        {arr.map((ele, index) => {
                            const {backdrop_path: imgUrl} = ele;
                            return (
                                <ImageMUI
                                    key={index}
                                    src={imgUrl}
                                    alt={''}
                                    width={166}
                                    height={250}
                                    sx={{
                                        width: '115px',
                                        height: '140px',
                                        borderRadius: '10px',
                                    }}
                                />
                            )
                        })}
                        <Box
                            sx={{
                                width: '90%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography>
                                {genre}
                            </Typography>
                            <Button
                                sx={{
                                    minWidth: 0,
                                    width: '40px',
                                    height: '40px',
                                }}
                            >
                                <IconArrowForBtn
                                    sx={{
                                        transform: 'rotate(-180deg)',
                                    }}
                                />
                            </Button>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}