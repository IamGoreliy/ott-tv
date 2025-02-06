import {createRouter} from "next-connect";
import {NextResponse} from "next/server";
import Redis from "ioredis";
import {tokenForRead} from "@/utils/fetchOptionForApiSearchMovie";
import {handelGetAdditionalData} from "@/app/api/getAllCategory/serverUtils";
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";
import {handleReceivingAndSortingData} from "@/app/serverUtils/utils/handlerDataProcessorAndSorted"


const router = createRouter();
const redis = new Redis({
    host: 'ott-tv-redis',
    port: 6379,
});

const CACHE_KEY = 'allCategoryData';
// 🍉🍉🍉 url на получение списка жанров фильмов
const urlGetListAllGenresMovie = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
// 🍈🍈🍈 url на получение списка жанров сериалов и тв шоу
const urlGetListAllGenresShows = 'https://api.themoviedb.org/3/genre/tv/list?language=en';
// 📼📼📼 url на получение базы по конкретному жанру (фильмы)
const urlSpecialGenreMovie = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=';
// 📽️📽️📽️ url на получение базы по конкретному жанру (сериалы)
const urlSpecialGenreShows = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=';
// 🔝🔝🔝 url на получение топ списка фильмов
const urlGetTopListMovie = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
// 🔝🔝🔝 url на получение топ спика tv-shows и сериалов
const urlGetTopListShows = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';
// url на получение данных секции Upcoming (фильмы)
const urlGetListUpcomingMovie = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
// url на получение данных секции Upcoming (сериалы)
const urlGetListUpcomingShows = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1';
// url на получение данных для секии popular фильмы
const urlGetPopularMovies = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
// url на получение данных для секии popular сериалы
const urlGetPopularShows = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';

const updateCache = async () => {
    try {
        // получение списка жанров фильмов (всего 19 жанров)
        const {genres: genresMovie} = await fetchSideAPI(urlGetListAllGenresMovie);
        // получение списка жанров сериалов
        const {genres: genresShows} = await fetchSideAPI(urlGetListAllGenresShows);
        // получение списка фильмов по категории (всего 19 запросов) сотировка и извлесчение необходимых данных
        const sortedData = await Promise.all([genresMovie, genresShows].map((ele, index) => handleReceivingAndSortingData(ele, index, [urlSpecialGenreMovie, urlSpecialGenreShows])));
        // 🍏🍏🍏 получение допольнительных данных для страницы списки для сериалов и фильмов (функцию можно дописывать и улучшать если нужно еще чтото потянуть)
        const getTopList = await handelGetAdditionalData(fetchSideAPI, [urlGetTopListMovie, urlGetTopListShows, urlGetListUpcomingMovie, urlGetListUpcomingShows, urlGetPopularMovies, urlGetPopularShows], ['topMovies', 'topShows', 'upcomingMovies', 'upcomingShows', 'popularMovies', 'popularShows']);
        sortedData.push(...getTopList);
        // запись данных в редис время жизни 1 час
        await redis.set(CACHE_KEY, JSON.stringify(sortedData), "EX", 3600);
        // перезапись в переменную рес для отправки фронту
        return sortedData;
    } catch (error) {
        return NextResponse.json(
            {
                 message:error.message || 'Failed to fetch genres',
                 error: error.error || null,
            },
            {
                status: error.status || 500,
            }
        )
    }
}


router.get(async (req, res ) => {
    try {
        // запрос на редис + проверка полученых данных с кеша. В случаи отсутствия кеша идет запрос на сервер
            const catchDataFromRedis = await redis.get(CACHE_KEY);
            if (catchDataFromRedis) {
                return NextResponse.json(JSON.parse(catchDataFromRedis));
            }
        res = await updateCache();
    } catch (e) {

    }
    return NextResponse.json(res);
})



export async function GET (req, res) {
   return router.run(req, res);
}

//старый масивный код работы сервера сервера. Принято решение минимизировать и разбить на несколько частей код для улучшение читаемости кода.
// router.get(async (req, res ) => {
// let getAllGenreMovie, getAllGenreShows;
// try {
// try {
// запрос на редис + проверка полученых данных с кеша. В случаи отсутствия кеша идет запрос на сервер
// const catchDataFromRedis = await redis.get(CACHE_KEY);
// if (catchDataFromRedis) {
//     return NextResponse.json(JSON.parse(catchDataFromRedis));
// }
// получение списка жанров фильмов (всего 19 жанров)
//         getAllGenreMovie = await fetchSideAPI(urlGetListAllGenresMovie);
//         // получение списка жанров сериалов
//         getAllGenreShows = await fetchSideAPI(urlGetListAllGenresShows);
//     } catch (e) {
//         console.error('route error', e);
//         const status = e.status || 500;
//         const errorObj = {
//                 status,
//                 message: 'Failed to fetch genres',
//                 error: e.message,
//             }
//         throw errorObj;
//     }
//     const {genres: genresMovie} = getAllGenreMovie;
//     const {genres: genresShows} = getAllGenreShows;
//     try {
//         // получение списка фильмов по категории (всего 19 запросов) сотировка и извлесчение необходимых данных
//         const sortedData = await Promise.all([genresMovie, genresShows].map((ele, index) => handleReceivingAndSortingData(ele, index, [urlSpecialGenreMovie, urlSpecialGenreShows])));
//         // 🍏🍏🍏 получение допольнительных данных для страницы списки для сериалов и фильмов (функцию можно дописывать и улучшать если нужно еще чтото потянуть)
//         const getTopList = await handelGetAdditionalData(fetchSideAPI, [urlGetTopListMovie, urlGetTopListShows, urlGetListUpcomingMovie, urlGetListUpcomingShows, urlGetPopularMovies, urlGetPopularShows], ['topMovies', 'topShows', 'upcomingMovies', 'upcomingShows', 'popularMovies', 'popularShows']);
//         sortedData.push(...getTopList);
//         // запись данных в редис время жизни 1 час
//         await redis.set(CACHE_KEY, JSON.stringify(sortedData), "EX", 3600);
//         // перезапись в переменную рес для отправки фронту
//         res = sortedData;
//     } catch (e) {
//         console.error('Alarm Fetch Error', e);
//         throw {
//             status: e.status || 500,
//             message: 'Failed to fetch genres',
//             error: e.message,
//         };
//     }
// }catch(err) {
//     return NextResponse.json(
//         {
//              message:err.message || 'Failed to fetch genres',
//              error: err.error || null,
//         },
//         {
//             status: err.status || 500,
//         }
//     )
// }
// return NextResponse.json(res);
// })


