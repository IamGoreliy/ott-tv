import {Box, Button} from "@mui/material";
import {RenderCategory} from "@/app/movieandserial/components/SelectTabs/RenderCategory";
import {DataCategoryContext} from "@/app/movieandserial/page";
import {useCallback, useContext, useEffect, useState} from "react";
import {RenderTopRating} from "@/app/movieandserial/components/SelectTabs/RenderTopRating";
import {SkeletonCategory} from "@/app/movieandserial/components/SelectTabs/SkeletonCategory";
import {SkeletonTopRating} from "@/app/movieandserial/components/SelectTabs/SkeletonTopRating";


// styling start 🍉🍉🍉

const mobileTabsNav = {
    width: '50%',
    color: 'white',
}

// styling end 🍉🍉🍉


export const SelectTabs = ({changeTabs, whatTabsSelected}) => {
    const dataForPage = useContext(DataCategoryContext);
    const [windowSize, setWindowSize] = useState(0);


    const handlerDataFiltering = useCallback((wordSearch, dataList) => {
        const result = dataList.find(ele => ele.name.toLowerCase() === wordSearch.toLowerCase()) ?? null;
        return result ? result.data : [];
    }, [dataForPage]);


    const handlerResize = useCallback(() => {
        setWindowSize(window.document.body.offsetWidth);
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handlerResize);

        handlerResize();

        return () => window.removeEventListener('resize', handlerResize);
    }, []);



    return (
        <Box>
            {/*📳📳📳📳 mobile menu start 📳📳📳📳*/}
            <Box
                sx={{
                    mt: '80px',
                    display: {xs: 'flex', md: 'none'},
                    width: '100%',
                    padding: '10px',
                    backgroundColor: 'black',
                }}
            >
                <Button
                    onClick={() => changeTabs('Movies')}
                    sx={{
                        ...mobileTabsNav,
                        backgroundColor: whatTabsSelected === 'Movies' ? '#1F1F1F' : 'transparent',
                    }}
                >
                    Movies
                </Button>
                <Button
                    onClick={() => changeTabs('Shows')}
                    sx={{
                        ...mobileTabsNav,
                        backgroundColor: whatTabsSelected === 'Shows' ? '#1F1F1F' : 'transparent',
                    }}
                >
                    Shows
                </Button>
            </Box>
            {/*📳📳📳📳 mobile menu end 📳📳📳📳*/}

            {/*start pc menu*/}
            <Box
                sx={{
                    mt: '50px',
                    display: {xs: 'none', md: 'flex'},
                }}
            >
                <Button
                    onClick={() => changeTabs('Movies')}
                    variant={'contained'}
                    sx={{
                        backgroundColor: whatTabsSelected === 'Movies' ? 'red' : 'transparent',
                        color: 'white'
                    }}
                >
                    Movies
                </Button>
                <Button
                    onClick={() => changeTabs('Shows')}
                    variant={'contained'}
                    sx={{
                        backgroundColor: whatTabsSelected === 'Shows' ? 'red' : 'transparent',
                        color: 'white'
                    }}
                >
                    Shows
                </Button>
            </Box>
            {/*end pc menu*/}

            {/*<SkeletonCategory*/}
            {/*    title='Our Genres'*/}
            {/*    windowSize={windowSize}*/}
            {/*    whatTabSelected={whatTabsSelected}*/}
            {/*/>*/}
            {dataForPage.length
                ? <RenderCategory
                    data={handlerDataFiltering(whatTabsSelected, dataForPage)}
                    windowSize={windowSize}
                    title={'Popular Top 10 In Genres'}
                    whatTabsActive={whatTabsSelected}
                />
                : <SkeletonCategory
                    title={'Popular Top 10 In Genres'}
                    windowSize={windowSize}
                />
            }

            {dataForPage.length
                ? <RenderTopRating
                    title='Trending Now'
                    list={handlerDataFiltering(`top${whatTabsSelected}`, dataForPage)}
                    windowSize={windowSize}
                    selectedTabs={whatTabsSelected.toLowerCase()}
                />
                : <SkeletonTopRating
                    title='Trending Now'
                    list={[1,2]}
                    windowSize={windowSize}
                />
            }
            {dataForPage.length
                ? <RenderTopRating
                    title='Upcoming'
                    list={handlerDataFiltering(`upcoming${whatTabsSelected}`, dataForPage)}
                    windowSize={windowSize}
                    selectedTabs={whatTabsSelected.toLowerCase()}
                />
                : <SkeletonTopRating
                    title='Upcoming'
                    list={[1,2]}
                    windowSize={windowSize}
                />
            }
            {dataForPage.length
                ? <RenderTopRating
                    title='Popular'
                    list={handlerDataFiltering(`popular${whatTabsSelected}`, dataForPage)}
                    windowSize={windowSize}
                    selectedTabs={whatTabsSelected.toLowerCase()}
                />
                : <SkeletonTopRating
                    title='Popular'
                    list={[1,2]}
                    windowSize={windowSize}
                />
            }
        </Box>
    )
}



