import {createRouter} from "next-connect";
import {NextResponse} from "next/server";

// import {NextResponse} from "next/server";


const router = createRouter();



//секция которая запускает данный кусок кода находится /movieandserial/details/components/OverviewMovie.js

router.post(async (req, res) => {
    const query = await req.text();
    // const query = await req.json(); // Получаем поисковый запрос из тела запроса
    // console.log('@@###@@@###@@@###@@@##Получен запрос@@@@@@@@@@:',  query);
    //
    // const fetchRezkaData = async (query) => {
    //     return fetch("https://rezka-ua.org/engine/ajax/search.php", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    //             "Accept": "text/html, */*; q=0.01",
    //         },
    //         body: `q=${encodeURIComponent(query)}`,
    //     });
    // };
    //
    // try {
    //     const responseRezka = await fetchRezkaData(query);
    //     const rezkaTest = await responseRezka.text();
    //
    //     console.log('$$$$$$$$$$$%%%%%%%%%&&&&&&&&&********', rezkaTest);
    //     NextResponse.json({message: 'успешно'});
    //
    // } catch (error) {
    //     console.log('**************&&&&&&&&&&&$$$$$$$$$$$$$$ Error',error.message);
    //     NextResponse.json({message: 'не успешно'});
    // }

});

export async function POST(req, res) {
    return router.run(req, res); // Используем next-connect для обработки запроса
}