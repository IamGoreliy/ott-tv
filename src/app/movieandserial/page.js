'use client';
import {Box} from "@mui/material";
import {TitleSection} from "@/app/movieandserial/components/TitleSection";
import {SelectTabs} from "@/app/movieandserial/components/SelectTabs/SelectTabs";
import {useCallback, useEffect, useState} from "react";
import {createContext} from "react";
import {SectionTrialVersion} from "@/app/component/HomePageComponent/SectionTrialVersion";

export const DataCategoryContext = createContext([])

const Page = () => {
    const [selectedTabs, setSelectedTabs] = useState('Movies');
    const [category, setCategory] = useState([]);
    const [dataCategoryRender, setDataCategoryRender] = useState([]);


    const preparationCategories = useCallback(async () => {
        const allCategory = await fetch('/api/getAllCategory');
        return await allCategory.json();
    }, []);

    const handleChangeTab = useCallback(value => {
        setSelectedTabs(value);
    }, []);


    useEffect(() => {
        preparationCategories()
            .then(res => setCategory(res))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (category.length > 0) {
            const dataForPage = category.filter(ele => {
                if (ele.name.toLowerCase().includes(`${selectedTabs.toLowerCase()}`)) {
                    return ele;
                }
            });
            setDataCategoryRender(dataForPage);
        }
    }, [selectedTabs, category]);





   return (
       <Box>
           <DataCategoryContext.Provider value={dataCategoryRender}>
               <TitleSection/>
               <SelectTabs changeTabs={handleChangeTab} whatTabsSelected={selectedTabs}/>
               <SectionTrialVersion/>
           </DataCategoryContext.Provider>
       </Box>
   )
}

export default Page;