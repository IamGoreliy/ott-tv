// хендлер переработки даты под категорию (из масива 1 категории удаляються все обьекты их 20 и оставляют 4 обьекта для категории)
// принимает один опязательный параметр (массив data для сортировки)
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";

export const handlerDataProcessor = (arrCategory) => {
    return arrCategory.map(ele => {
        let counter = 0;
        const res = {genre: ele.name, genreId: ele.idCategory, arr: []};
        while(counter < 4) {
            res.arr.push(ele.results[counter]);
            counter += 1;
        }
        return res;
    });
}

//функция которая получает масив данных для 19 категорий (19 запросов) в каждной категории есть масив данных который содержит данные про 20 фильмов с помощью функцции handlerDataProcessor в каждой категории изменяем ее масив данных с 20 до 4 фильмов

export const handleReceivingAndSortingData = async (genresList, idCategory, urlList = []) => {
    const allCategoryData = await Promise.all(genresList.map( async ({id, name}) => {
        const urlRequest = urlList[idCategory];
        const responseCategory = await fetchSideAPI(urlRequest, id);
        return {name: name, idCategory: id, ...responseCategory};
    }));
    return{name: idCategory === 0 ? 'movies' : 'shows', data: handlerDataProcessor(allCategoryData)};
}