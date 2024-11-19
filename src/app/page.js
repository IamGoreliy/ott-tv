'use client';
import {TitleHome} from "@/app/component/HomePageComponent/TitleHome";
import {VarietyCategories} from "@/app/component/HomePageComponent/VarietyCategories";
import {useEffect, useState} from "react";
import {custFetchGetPost} from "@/utils/communicatingWithServe";



export default function Home() {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        custFetchGetPost('https://api.themoviedb.org/3/genre/movie/list?language=en').then(res => setResponse(res)).catch(error => console.log(error));
    }, []);

    console.log(response);

    return (
      <>
        <TitleHome/>
        <VarietyCategories/>
      </>
    );
}
