import {Box} from "@mui/material";
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";
import {RenderTitlePhotoAndDescriptionActor} from "@/app/movieandserial/actorsFilmsList/components/RenderTitlePhoto";
import {RenderList} from "@/app/movieandserial/actorsFilmsList/components/RenderList";

const createUrl = (idActor) => {
    return [
        `https://api.themoviedb.org/3/person/${idActor}/movie_credits?`,
        `https://api.themoviedb.org/3/person/${idActor}?append_to_response=images`,
    ]
}


const Page = async ({params}) => {
    const {id: idActor} = await params;
    // const {cast, crew, id} = await fetchSideAPI(`https://api.themoviedb.org/3/person/${idActor}/movie_credits?append_to_response=images`);
    const [film, infoAndPhotoActor] = await Promise.all(createUrl(idActor).map(ele => fetchSideAPI(ele)));
    return (
        <Box>
            <RenderTitlePhotoAndDescriptionActor dataForActor={infoAndPhotoActor} />
            <RenderList filmList={film}/>
        </Box>
    )
}

export default Page;

