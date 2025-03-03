import {Box, Typography} from "@mui/material";
import {useCallback} from "react";
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";

const linkForSearch = {
    multiSearch: (value, numPage = 1) => `https://api.themoviedb.org/3/search/multi?query=${value}&include_adult=false&language=en-US&page=${numPage}`,
    filmSearch: (value, numPage = 1) => `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=${numPage}`,
    actorSearch: (value, numPage= 1) => `https://api.themoviedb.org/3/search/person?query=${value}&include_adult=false&language=en-US&page=${numPage}`,
};

const Page = async ({params, searchParams}) => {
    const {id: userSearchQuery} = await params;
    const {searchTab} = await searchParams;
    const decodeResult = decodeURIComponent(userSearchQuery);
    const createSearchLink = linkForSearch[`${searchTab}Search`];
    const data = await fetchSideAPI(createSearchLink(userSearchQuery));

    console.log(data)

    return (
        <Box>
            <Typography
                variant="body2"
                sx={{
                    color: 'white',
                }}
            >
                Search movie {decodeResult}
            </Typography>
        </Box>
    )
}
export default Page;