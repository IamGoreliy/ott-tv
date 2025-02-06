import {useEffect, useState} from "react";
import {tokenForRead} from "@/utils/fetchOptionForApiSearchMovie";
import {Box, Button} from "@mui/material";

const urlGetListAllGenresShows = 'https://api.themoviedb.org/3/genre/tv/list?language=en';
const urlSpecialGenreMovieOld = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=';
const urlSpecialGenreShowsNew = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres='


const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${tokenForRead}`,
    }
}

const testFetchAllGenre = async () => {
    const response = await fetch(urlGetListAllGenresShows, options);
    return response.json();
}

const testFetchForCategory = async (url, idCategory) => {
    const createQueryString = `${url}${idCategory}`;
    const response = await fetch(createQueryString, options);
    return response.json();
}

const handlerMultipleRequests = async (arr) => {
    const response = await Promise.all(arr.map(ele => testFetchForCategory(urlSpecialGenreShowsNew, ele.id)));
    return response;
}

export const ComponentTestFetch = () => {
    const [startFetch, setStartFetch] = useState(false);
    const [testData, setTestData] = useState([]);
    const [getAllGenres, setGetAllGenres] = useState([]);

    console.log('проверка что есть категории', getAllGenres);
    console.log('проверка что приходит в шовсах',testData);

    useEffect(() => {
        testFetchAllGenre()
            .then(({genres}) => setGetAllGenres(genres))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        if (getAllGenres.length > 0 && startFetch) {
            handlerMultipleRequests(getAllGenres)
                .then(res => setTestData(res))
                .catch(error => console.error(error));
            setStartFetch(false);
        }
    }, [getAllGenres, startFetch]);

    return (
        <Box
            sx={{
                mt: '30px',
            }}
        >
            <Button
                onClick={() => setStartFetch(true)}
                variant={'contained'}
            >
                start test
            </Button>
        </Box>
    )
}