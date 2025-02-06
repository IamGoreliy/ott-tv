import {Box, Typography} from "@mui/material";
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";

const urlSpecialGenreMovie = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=';


const Page = async ({params}) => {
    const {id} = await params;
    const responseListMovie = await fetchSideAPI(urlSpecialGenreMovie, id);




    return (
        <Box>
            <Box
                component={'ul'}
            >

            </Box>
        </Box>
    )
}

export default Page;
