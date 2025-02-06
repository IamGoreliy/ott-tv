export const handelGetAdditionalData = async (customFetch, urlList, nameCategory) => {
    return await Promise.all(urlList.map(async (url, index) => {
        const {results}  = await customFetch(url);
        // return {name: index === 0 ? 'topMovies' : 'topShows', data: results};
        return {name: nameCategory[index], data: results};
    }));
}