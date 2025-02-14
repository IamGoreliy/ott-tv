import {Box, Grid2, Typography} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";
import {IconCalendar, IconEye} from "@/utils/createSvg";
import {PaginationForCategory} from "@/app/movieandserial/components/SelectTabs/PaginationForCategory";
import {useEffect, useState} from "react";
import {auxiliaryFnForPaginationList} from "@/utils/auxiliaryFnForPaginationList";
import Link from "next/link";
import {useRouter} from "next/navigation";

const urlForImage = "https://image.tmdb.org/t/p/";
const mobileImageSize = "w300";
const pcImageSize = 'origin';


export const RenderTopRating = ({title, list = [], windowSize, selectedTabs}) => {
    const [dataListRender, setDataListRender] = useState([]);
    const [whatNumPage, setWhatNumPage] = useState(1);
    const partUrlForImgMobileVer = `${urlForImage}${mobileImageSize}`;
    const partUrlForImgPCVer = `${urlForImage}${pcImageSize}`;
    const router = useRouter();


    useEffect(() => {
        if (windowSize >= 901) {
            const result = auxiliaryFnForPaginationList(list, whatNumPage);
            setDataListRender(result);
        } else {
            setDataListRender(list);
        }
    }, [list, whatNumPage, windowSize]);


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
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    overflow: 'auto',
                    justifyContent: {xs: 'unset', md: 'space-between'},
                    columnGap: {xs: '40px', md: 'unset'},
                    width: '100%',
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
                {dataListRender.map((item, index) => {
                    const {id, backdrop_path: backdropPath, poster_path: posterPath, title, vote_average: voteRating, release_date: dateRelease} = item;
                    return (
                        <Box
                            key={index}
                            component='li'
                            sx={{
                                flexBasis: {xs: 'unset', md: 'calc((100% / 5) - 40px)'},
                                padding: '20px',
                                backgroundColor: '#2A2A2A',
                                borderRadius: '12px',
                            }}
                        >
                            <Box
                                onClick={() => router.push(`/movieandserial/details/${selectedTabs}/${id}`)}
                            >
                                <ImageMUI
                                    src={partUrlForImgMobileVer + posterPath}
                                    alt={''}
                                    width={250}
                                    height={280}
                                    sx={{
                                        borderRadius: '12px',
                                        width: {xs: 'unset',  md: '100%'},
                                        // height: '100%',
                                    }}
                                />
                                <Box
                                    sx={{
                                        mt: '10px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItem: 'center',
                                            columnGap: '5px',
                                        }}
                                    >
                                        <IconCalendar
                                            sx={{
                                                width: '20px',
                                                height: '20px',
                                                fill: 'white',
                                            }}
                                        />
                                        <Typography>
                                            {dateRelease}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItem: 'center',
                                            columnGap: '5px',
                                        }}
                                    >
                                        <IconEye
                                            sx={{
                                                fill: 'white',
                                            }}
                                        />
                                        <Typography>
                                            {voteRating}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

