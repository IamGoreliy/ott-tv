import {tokenForRead} from "@/utils/fetchOptionForApiSearchMovie";


// fetch для работы со сторонним сервером
// принимает 1 обязательный параметр (url) 2 необязательный (id жанра фильма или сериала) - нужно для получения списка фильмов/сериалов по конкретному жанру

export const fetchSideAPI = async (url, idGenre = -1) => {
    let currentURL = `${url}`;
    let result;
    if (idGenre >= 0) {
        currentURL = `${url}${idGenre}`;
    }
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${tokenForRead}`,
        }
    }
    try {
        result = await fetch(currentURL, options);
        if (result.status === 204) {
            throw new Error('the server didn\'t give anything back');
        }
        return await result.json();
    } catch (error) {
        console.log('Fetch Error', error);
        throw {status: 400, message: error.message || 'Failed to fetch from server'};
    }
}