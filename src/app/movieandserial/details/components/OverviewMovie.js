'use client';
import {Box} from "@mui/material";
import {SectionDescription} from "@/app/movieandserial/details/components/descriptionPageComponents/SectionDescription";
import {
    SectionInformationMovie
} from "@/app/movieandserial/details/components/descriptionPageComponents/SectionInformationMovie";
import {SectionCast} from "@/app/movieandserial/details/components/descriptionPageComponents/SectionCast";
import {SectionReviews} from "@/app/movieandserial/details/components/descriptionPageComponents/SectionReviews";
import {useEffect, useState} from "react";
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";

// запрос к API который должен дать отправить фетч на hdrezka (временно приостановлен)
// const searchMovies = async (query) => {
//         const response = await fetch("/api/startServerUpdateCache", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(query), // Передаем поисковый запрос
//         });
//         return await response.json();
// };



// получение официального трейлера
const findOfficialTrailer = (data = {}, recordState) => {
    const {results: arr} = data;
    const dataMovieTrailer = arr.find(ele => ele.type === "Official Trailer");
    if (dataMovieTrailer) {
        recordState(dataMovieTrailer);
        return;
    }
    arr.length > 0 ? recordState(arr[0]) : recordState({key: 'NpEaa2P7qZI'});
}

export const OverviewMovie = ({dataMovie}) => {
    const [language, setLanguage] = useState('en-US');
    const [dataMovieTrailer, setDataMovieTrailer] = useState([]);
    const {id,overview, genres, vote_average: movieRating, spoken_languages: languages, release_date: dateRelease} = dataMovie;
    const {credits: {cast, crew}} = dataMovie;

    // const {results} = await fetchSideAPI(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
    // const movieTrailer = findOfficialTrailer(results);

    // console.log(rezkaResponse);

    // это запрос на api next, которое в свою очередь должно отпраить отправить запрос на hdrezka (временно приостановлено)
    // useEffect(() => {
    //     searchMovies( 'такси')
    //         .then(value => console.log(value))
    //         .catch(err => console.log(err));
    // }, []);



    useEffect(() => {
        fetchSideAPI(`https://api.themoviedb.org/3/movie/${id}/videos?language=${language}`)
            .then(res => findOfficialTrailer(res, setDataMovieTrailer))
            .catch(error => console.log(error));
    }, [language]);


    return (
        <Box
            sx={{
                mt: '80px',
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: 'space-between',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '20px',
                    flexBasis: {xs: '100%', md: '64%'},
                }}
            >
                <SectionDescription overviewText={overview}/>
                <Box
                    sx={{
                        display: {xs: 'block', md: 'none'},
                    }}
                >
                    <SectionInformationMovie  movieGuide={crew} genres={genres} movieRating={movieRating} languages={languages} dateRelease={dateRelease}/>
                </Box>
                <SectionCast cast={cast}/>
                <SectionReviews refTrailer={dataMovieTrailer} changeLan={[language, setLanguage]}/>
            </Box>
            <Box
                sx={{
                    display: {xs: 'none', md: 'block'},
                    flexBasis: '34%'
                }}
            >
                <SectionInformationMovie movieGuide={crew} genres={genres} movieRating={movieRating} languages={languages} dateRelease={dateRelease}/>
            </Box>
        </Box>
    )
}