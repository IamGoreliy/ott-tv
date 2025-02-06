import {Box} from "@mui/material";
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";
import {TitleImage} from "@/app/movieandserial/details/components/TitleImage";
import {OverviewMovie} from "@/app/movieandserial/details/components/OverviewMovie";

const url = 'https://api.themoviedb.org/3/movie/${movie_id}?append_to_response=credits'



const Page = async ({params}) => {
    const {id: movieId} = params;
    const res = await fetchSideAPI(`https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits`);


    return (
        <Box>
            <TitleImage dataForImg={res}/>
            <OverviewMovie dataMovie={res}/>
        </Box>
    )
}

export default Page;

