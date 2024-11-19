import {createRouter} from "next-connect";
import {NextResponse} from "next/server";

const router = createRouter();

router.get((req, res ) => {
    console.log('server is work');
    return NextResponse.json({message: 'server is work'});
})

export async function GET (req, res) {
   return router.run(req, res);
}

//список запросов к сторонему API 🌈🌈🌈🌈🌈

//https://api.themoviedb.org/3/genre/movie/list?language=en - 🦄🦄🦄 запрос на получение всех категорий