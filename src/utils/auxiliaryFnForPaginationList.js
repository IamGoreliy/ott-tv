export const auxiliaryFnForPaginationList = (list, numPage) => {
    const paginationList = {
        1: 0,
        2: 5,
        3: 10,
        4: 15,
    };
    return list.slice(paginationList[numPage], paginationList[numPage + 1]);
}