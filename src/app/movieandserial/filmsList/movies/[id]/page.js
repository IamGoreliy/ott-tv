import {Box, Typography} from "@mui/material";
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";
import {RenderList} from "@/app/movieandserial/filmsList/component/RenderList";

const urlSpecialGenreMovie = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=';


const Page = async ({params}) => {
    const {id} = await params;
    const {page, results} = await fetchSideAPI(urlSpecialGenreMovie, id);

    console.log(results)


    return (
        <Box>
            <RenderList list={results} idCategory={id}/>
        </Box>
    )
}

export default Page;
