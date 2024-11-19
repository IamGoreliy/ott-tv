const optionGetMethod = () => {
    return {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDUzYmM3NDRmMGM2ZTQ2NWY3MzI3OTA2OTUzMzMyZCIsIm5iZiI6MTczMTY3MTMyNi4yNzM1NzM5LCJzdWIiOiI2NGEyZWQzZGU4ZDAyODAwZmY4YTkyZDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.z36GUr5fDzveYqUZYYIV4b3C_0Dkr13VjxF9Aap-W84',
        },
    }
}
const optionPostMethod = (data) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
}

export const custFetchGetPost = async (url, method = 'get', data = '') => {
    let res;
    if (method === 'get') {
        res = await fetch(url, optionGetMethod());
    } else {
        res = await fetch(url, optionPostMethod(data));
    }
    return await res.json();
};