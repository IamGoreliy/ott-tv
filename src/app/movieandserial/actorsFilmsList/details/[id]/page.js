import {Box} from "@mui/material";
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";


const Page = async ({params}) => {
    const {idActor} = await params;
    console.log(idActor);
    // const res = await fetchSideAPI(`https://api.themoviedb.org/3/person/${idActor}/movie_credits?`);
    return (
        <Box>

        </Box>
    )
}

export default Page;