'use client';
import {Box} from "@mui/material";
import {useEffect, useState, createContext} from "react";
import {tokenForRead} from "@/utils/fetchOptionForApiSearchMovie";

const path = 'https://api.themoviedb.org/3/movie/popular';
const option = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${tokenForRead}`
    }
};

export const MovieData = createContext([])

const fetchFavorites = async () => {
    const response = await fetch(path, option);
    return await response.json();
}

const Template = ({children}) => {
    const [favoritesMovie, setFavoritesMovie] = useState([]);

    useEffect(() => {
        fetchFavorites()
            .then(popularMovie => setFavoritesMovie(popularMovie))
            .catch(console.error);
    }, [])

    return (
        <Box
            id='header'
            sx={{
                padding: {xs: '90px 0px', md: '100px 0px'},
            }}
        >
            <MovieData.Provider value={ favoritesMovie }>
                {children}
            </MovieData.Provider>
        </Box>
    )
}

export default Template;