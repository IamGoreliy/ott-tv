'use client';
import {TitleHome} from "@/app/component/HomePageComponent/TitleHome";
import {VarietyCategories} from "@/app/component/HomePageComponent/VarietyCategories";
import {useEffect, useState} from "react";
import {custFetchGetPost} from "@/utils/communicatingWithServe";
import {Possibilities} from "@/app/component/HomePageComponent/Possibilities";
import {FAQ} from "@/app/component/HomePageComponent/FAQ";
import {TariffPlan} from "@/app/component/HomePageComponent/TariffPlan";
import {SectionTrialVersion} from "@/app/component/HomePageComponent/SectionTrialVersion";



export default function Home() {
    const [allCategory, setAllCategory] = useState([]);

    useEffect(() => {
        custFetchGetPost('https://api.themoviedb.org/3/genre/movie/list?language=en').then(res => setAllCategory(res.genres)).catch(error => console.log(error));
    }, []);

    return (
      <>
        <TitleHome/>
        <VarietyCategories listCategories={allCategory} />
        <Possibilities/>
        <FAQ/>
        <TariffPlan/>
        <SectionTrialVersion/>
      </>
    );
}
