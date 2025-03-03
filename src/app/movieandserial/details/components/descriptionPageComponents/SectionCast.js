'use client';
import {Box, Button, Typography} from "@mui/material";
import {IconArrowForBtn} from "@/utils/createSvg";
import {ImageMUI} from "@/utils/customComponents";
import Link from "next/link";


const imgOption = {
    startPath: 'https://image.tmdb.org/t/p/w780',
    // imageWidth: '358',
    // imageHeight: '468',
    imageWidth: '87',
    imageHeight: '89',
}

// start styling

const titleStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    color: '#999999',
}

// end styling

const createPathImage = (path) => path ? `${imgOption.startPath}${path}` : '/placeholderImage/6.jpg';

export const SectionCast = ({cast = []}) => {
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
                    Cast
                </Typography>

                <Box>
                    <Button>
                        <IconArrowForBtn/>
                    </Button>
                    <Button>
                        <IconArrowForBtn
                            sx={{
                                transform: 'rotate(-180deg)',
                            }}
                        />
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    mt: '20px',
                    // width: '100%',
                    overflowX: 'auto',
                }}
            >
                <Box
                    component={'ul'}
                    sx={{
                        width: '700px',
                        padding: 0,
                        listStyle: 'none',
                        display: 'flex',
                    }}
                >
                    {cast.length > 0 ? cast.map((castElem, index) => {
                        const {id: idActor, profile_path: actorImage, name, character} = castElem;
                        return (
                            <Box
                                key={index}
                                component={'li'}
                                sx={{
                                    '& + & ': {
                                        marginLeft: '20px',
                                    },
                                }}
                            >
                                <Link
                                    href={`/movieandserial/actorsFilmsList/details/${idActor}`}
                                    prefetch={true}
                                >
                                    <ImageMUI
                                        src={createPathImage(actorImage)}
                                        alt={''}
                                        width={imgOption.imageWidth}
                                        height={imgOption.imageHeight}
                                        sx={{
                                            objectFit: 'cover',
                                            borderRadius: '10px',
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            width: '87px',

                                        }}
                                    >
                                        <Typography>
                                            <b>{name}</b>
                                        </Typography>
                                        <Typography>
                                            <i>{character}</i>
                                        </Typography>
                                    </Box>
                                </Link>
                            </Box>
                        )
                    }) : <Typography>нет иформации</Typography>}
                </Box>
            </Box>
        </Box>
    )
}