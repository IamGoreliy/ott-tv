
import {Box} from "@mui/material";
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";
import {TitleImage} from "@/app/movieandserial/details/components/TitleImage";
import {OverviewMovie} from "@/app/movieandserial/details/components/OverviewMovie";


const Page = async ({params}) => {
    const {id: serialId} = params;
    const res = await fetchSideAPI(`https://api.themoviedb.org/3/tv/${serialId}?append_to_response=credits`);

    console.log(res);

    return (
        <Box>
            <TitleImage dataForImg={res}/>
            <OverviewMovie dataMovie={res}/>
        </Box>
    )
}

export default Page;