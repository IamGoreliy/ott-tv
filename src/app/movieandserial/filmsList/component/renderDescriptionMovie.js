import {Box, Button, Typography} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";
import {useRouter} from "next/navigation";

const mobileSize = {
    startPath: 'https://image.tmdb.org/t/p/w780',
    imageWidth: '358',
    imageHeight: '468',
}

const titleStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: {xs: '24', md: '30px', xl: '38px'},
    fontWeight: 'bold',
    lineHeight: 1.5,
};

const descriptionStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: {xs: '12', md: '16px', xl: '18px'},
    fontWeight: 'medium',
    lineHeight: 1.5,
};

export const RenderDescriptionMovie = ({id, imgPath, title, description, closeMenuOpt}) => {
    const router = useRouter();
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                columnGap: '40px',
                flexDirection: {xs: 'column', sm: 'row'},
                alignItems: {xs: 'unset', sm: 'center', md: 'unset'},
            }}
        >
            <Box
                sx={{
                    flexBasis: {xs: 'unset', sm: 'calc((100% - 40px) / 2 )'},
                    mt: {xs: '20px', md: '0px'},
                }}
            >
                <ImageMUI
                    src={`${mobileSize.startPath}${imgPath}`}
                    alt={''}
                    width={mobileSize.imageWidth}
                    height={mobileSize.imageHeight}
                    sx={{
                        width: '100%',
                        height: {xs: 'unset', md: '100%'},
                        objectFit: 'cover',
                        borderRadius: '20px',
                    }}
                />
            </Box>
            <Box
                sx={{
                    flexBasis: {xs: 'unset', sm: 'calc((100% - 40px) / 2 )'},
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: {xs: 'unset', md: 'center'},
                    alignItems: {xs: 'unset', md: 'center'},
                    overflow: 'auto',
                    mt: {xs: '20px', md: '0px'},
                }}
            >
                <Typography
                    sx={{
                        ...titleStyle,
                    }}
                >
                    {title ?? 'Information is not found'}
                </Typography>
                <Typography
                    sx={{
                        ...descriptionStyle,
                    }}
                >
                    {description ?? 'There is no description of the material of interest'}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        columnGap: {xs: '20px', md: 'unset'},
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        onClick={() => router.push(`/movieandserial/details/movies/${id}`)}
                        // href={`/movieandserial/details/movies/${id}`}
                        sx={{
                            mt: '20px',
                            backgroundColor: 'black',
                            color: 'white',
                            width: '150px',
                        }}
                    >
                        open movie
                    </Button>
                    <Button
                        onClick={closeMenuOpt}
                        sx={{
                            mt: '20px',
                            backgroundColor: 'black',
                            color: 'white',
                            width: '150px',
                            transform: {xs: 'unset', md: 'scale(0)'},
                            display: {xs: 'inline-flex', md: 'none'},
                        }}
                    >
                        close
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}