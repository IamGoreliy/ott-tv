import {Box, Grid2, Typography} from '@mui/material';
import {ImageMUI} from "@/utils/customComponents";
import {IconArrowForBtn} from "@/utils/createSvg";
import {listForCategory} from "@/utils/listForCategory";
import {useEffect, useState, useLayoutEffect} from "react";
import {PaginationForCategory} from "@/app/movieandserial/components/SelectTabs/PaginationForCategory";
import {auxiliaryFnForPaginationList} from "@/utils/auxiliaryFnForPaginationList";
import Link from "next/link";
import {useRouter} from "next/navigation";

const urlForImage = "https://image.tmdb.org/t/p/";
const mobileImageSize = "w300";
const pcImageSize = 'origin';

export const RenderCategory = ({data, title, windowSize, whatTabsActive}) => {
    const [whatNumPage, setWhatNumPage] = useState(1);
    const [dataRender, setDataRender] = useState([]);
    // const [windowSize, setWindowSize] = useState(0);
    const imgURL = `${urlForImage}${mobileImageSize}`;
    const router = useRouter();


    useEffect(() => {
        if (windowSize >= 901) {
            const result = auxiliaryFnForPaginationList(data, whatNumPage);
            setDataRender(result);
        } else {
            setDataRender(data);
        }

    }, [data, whatNumPage, windowSize])


    return (
        <Box
            sx={{
                mt: '50px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',

                }}
            >
                <Typography
                    variant="h3"
                >
                    {title}
                </Typography>
                <PaginationForCategory changePage={setWhatNumPage}/>
            </Box>
            <Box
                component='ul'
                sx={{

                    mt: '20px',
                    display: "flex",
                    listStyle: 'none',
                    padding: 0,
                    overflow: 'auto',
                    columnGap: '40px',
                    paddingBottom: '10px',
                    '&::-webkit-scrollbar-track': {
                        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.9)',
                        borderRadius: '5px',
                        backgroundColor: '#444444',

                    },
                    '&::-webkit-scrollbar': {
                        height: '6px',
                        backgroundColor: '#F5F5F5',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: '10px',
                        backgroundColor: '#D62929',
                        backgroundImage: 'gradient(90deg, transparent, rgba(0, 0, 0, 0.4) 50%,transparent,transparent)',
                    },
                }}

            >
                {dataRender.map((category, index) => {
                    const {genre, genreId, arr} = category;
                    return (
                        <Box
                            key={index}
                            component='li'
                            sx={{

                                maxWidth: '302px',
                                // minHeight: '201px',
                                padding: '19px',
                                borderRadius: '12px',
                                backgroundColor: '#2A2A2A',
                            }}
                        >
                            <Box
                                onClick={() => router.push(`/movieandserial/filmsList/${whatTabsActive.toLowerCase()}/${genreId}`)}
                            >
                                <Grid2
                                    container
                                    spacing={2}
                                    sx={{
                                        position: 'relative',
                                        width: {xs: '200px', md: 'unset'},
                                    }}
                                >
                                    {arr.map((ele, index) => {
                                        const {poster_path: posterPath} = ele;
                                        return(
                                            <Grid2
                                                key={index}
                                                size={{
                                                    xs: 6,
                                                    md: 6,
                                                    xl: 6,
                                                }}
                                            >
                                                <ImageMUI
                                                    src={imgURL + posterPath}
                                                    alt={''}
                                                    width={380}
                                                    height={300}
                                                    sx={{
                                                        width: '100%',
                                                        height: '100%',
                                                        borderRadius: '5px',
                                                    }}
                                                />
                                            </Grid2>
                                        )
                                    })}
                                    {/*<Box*/}
                                    {/*    sx={{*/}
                                    {/*        position: 'absolute',*/}
                                    {/*        top: 0,*/}
                                    {/*        left: 0,*/}
                                    {/*        width: '100%',*/}
                                    {/*        height: '100%',*/}
                                    {/*        background: 'linear-gradient(180deg, rgba(26,26,26,0) 0%, rgba(26,26,26,1) 100%)',*/}
                                    {/*    }}*/}
                                    {/*/>*/}
                                </Grid2>

                                <Box
                                    sx={{
                                        mt: '10px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                <Typography>
                                    {genre}
                                </Typography>
                                <IconArrowForBtn
                                    sx={{
                                        transform: 'rotate(180deg)',
                                    }}
                                />
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}