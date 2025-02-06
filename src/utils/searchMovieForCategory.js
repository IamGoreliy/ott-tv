import {Box} from "@mui/material";
import {useCallback} from "react";

export function SearchMovie(category) {
    const searchMovieForCategory = useCallback(async () => {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28';
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${tokenForRead}`,
            }
        }
        const result = await fetch(url, options);
        return await result.json();
    }, [])
    return (
        <Box>

        </Box>
    )
}
