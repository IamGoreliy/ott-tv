import {Box} from "@mui/material";
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";
import {RenderList} from "@/app/movieandserial/filmsList/component/RenderList";

// 📽️📽️📽️ url на получение базы по конкретному жанру (сериалы)
const urlSpecialGenreShows = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=';

const Page = async ({params}) => {
    const {id} = await params;
    const {page, results} = await fetchSideAPI(urlSpecialGenreShows, id);
    return (
        <Box>
            <RenderList list={results} idCategory={id}/>
        </Box>
    )
}

export default Page;