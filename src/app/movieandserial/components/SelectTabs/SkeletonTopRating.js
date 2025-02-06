import {Box, Typography} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";
import {PaginationForCategory} from "@/app/movieandserial/components/SelectTabs/PaginationForCategory";
import {useState} from "react";

export const SkeletonTopRating = ({title = '',  list = [], windowSize}) => {
    const [whatNumPage, setWhatNumPage] = useState(1);
    return (
        <Box>
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
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    overflow: 'auto',
                    columnGap: '40px',

                }}
            >
                {list.map((item, index) => {
                    return (
                        <Box
                            key={index}
                            component='li'
                        >
                            <a href="https://www.flaticon.com/free-icons/picture" title="Picture icons created by FauzIDEA - Flaticon" aria-label='Picture icons created by FauzIDEA - Flaticon'>
                                <ImageMUI
                                    src={'/placeholderImage/photo-gallery.png'}
                                    alt={''}
                                    width={300}
                                    height={300}
                                    sx={{}}
                                />
                            </a>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}