'use client';
import {Box, Button, Container} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";
import {IconMobileMenu, IconNotifications, IconSearch} from "@/utils/createSvg";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {MobileHeaderMenu} from "@/app/component/MobileHeaderMenu";
import {useRouter} from "next/navigation";
import debounce from 'lodash.debounce';
import {createPortal} from "react-dom";
import {ModalWindowSearchList} from "@/app/component/HomePageComponent/ModalWindowSearchList";
import {fetchSideAPI} from "@/app/serverUtils/utils/fetchForSideServer";

const headerBtnNav = [
    {
        nameBtn: 'Home',
        link: '/'
    },
    {
        nameBtn: 'Movies & Shows',
        link: '/movieandserial',
    },
    {
        nameBtn: 'Support',
        link: '/'
    },
    {
        nameBtn: 'Subscriptions',
        link: '/'
    }
];

const linkForSearch = {
    multiSearch: (value) => `https://api.themoviedb.org/3/search/multi?query=${value}&include_adult=false&language=en-US&page=1`,
    filmSearch: (value) => `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
    actorSearch: (value) => `https://api.themoviedb.org/3/search/person?query=${value}&include_adult=false&language=en-US&page=1`,
}

export const Header = () => {
    const [toggleSearch, setToggleSearch] = useState(false);
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const [modalSearchList, setModalSearchList] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    const [dataSearchList, setDataSearchList] = useState([]);
    const [whatTabsSelected, setWhatTabsSelected] = useState('multi');
    const router = useRouter();

    const switchTabs = useCallback((nameTabs = '', link = {}, value) => {
        const fullNameForLinkSearch = nameTabs + 'Search';
        const res = link[fullNameForLinkSearch];
        return res(value);
    }, []);

    // вариант 1: использовать debounce в useRef;
    // const handlerSearch = useRef(debounce(value => {
    //     console.log(value);
    // }, 500)).current;


    //вариант 2: использоване debounce в useCallback;
    // const handlerSearch = useCallback(debounce((value) => {
    //         console.log(value);
    //      }, 500),
    // []);

    // вариает 3: использование debounce в useMemo;
    const handlerSearch = useMemo(() => {
        return debounce((value) => {
            setInputSearch(value);
        }, 1000);
    }, []);

    //напрямую поиск (fetch) без useEffect
    // const handlerSearch = useMemo(() => {
    //     return debounce((value) => {
    //         fetchSideAPI(switchTabs(whatTabsSelected, linkForSearch, value))
    //             .then(data => {
    //                 const {page, results} = data;
    //                 if (results.length > 0) {
    //                     setDataSearchList(results);
    //                 }
    //             })
    //             .catch(error => console.log(error));
    //     }, 1000);
    // }, []);

    useEffect(() => {
        if (inputSearch) {
            fetchSideAPI(switchTabs(whatTabsSelected, linkForSearch, inputSearch))
                .then(data => {
                    const {page, results} = data;
                    if (results.length > 0) {
                        setDataSearchList(results);
                    }
                })
                .catch(error => console.log(error));
        }
    }, [inputSearch, whatTabsSelected]);

    const handleOpenMobileMenu = useCallback(() => {
        setMobileMenuIsOpen(false);
    }, []);


    return (
       <Container
           maxWidth={'xl'}
       >
           <Box
               sx={{
                   position: 'fixed',
                   top: 0,
                   left: 0,
                   display: 'flex',
                   justifyContent: 'space-around',
                   alignItems: 'center',
                   width: '100%',
                   zIndex: 2,
                   backgroundColor: 'rgba(28,28,28,0.8)',
                   padding: '5px 0px',
               }}
           >
               <Box
                   sx={{
                       display: 'flex',
                       alignItems: 'center',
                   }}
               >
                   {/*лого*/}
                   <ImageMUI
                       src={'/images/header/logo.png'}
                       alt={'logo'}
                       width={60}
                       height={60}
                   />
                   <ImageMUI
                       src={'/images/header/logoName.png'}
                       alt={'logoName'}
                       width={144}
                       height={28}
                       sx={{
                           marginTop: '7px'
                       }}
                   />
               </Box>

               {/*🖥🖥🖥PC version header navigation start🖥🖥🖥*/}

               <Box
                   component={'ul'}
                   sx={{
                       display: {xs: 'none', md: 'flex'},
                       listStyle: 'none',
                       padding: '10px',
                       border: '3px solid #484848',
                       borderRadius: '12px',
                       backgroundColor: 'black',

                   }}
               >
                   {/*кнопки меню*/}
                   {headerBtnNav.map((ele, index) => {
                       const {nameBtn, link} = ele;
                       return (
                           <Box
                               key={index}
                               component={'li'}
                           >
                               <Button
                                   onClick={() => router.push(link)}
                                   sx={{
                                       color: '#BFBFBF',
                                       '&:hover': {
                                           color: 'white',
                                           backgroundColor: 'red',
                                       },
                                   }}
                               >
                                   {nameBtn}
                               </Button>
                           </Box>
                       )
                   })}
               </Box>
               <Box
                   id={'sectionSearch'}
                   sx={{
                       display: {xs: 'none', md: 'block'},
                       position: 'relative'
                   }}
               >
                   {/*поиск уведомления*/}
                   <Box
                       onChange={({target: {value}}) => {
                           if (value.length > 0) {
                               setModalSearchList(true);
                               handlerSearch(value);
                           } else {
                               setModalSearchList(false);
                               setDataSearchList([]);
                           }
                       }}
                       component={'input'}
                       type={'text'}
                       placeholder={'search...'}
                       sx={{
                           width: toggleSearch ? '170px' : '0px',
                           height: '40px',
                           border: '1px solid #E50000',
                           // borderColor: toggleSearch ? '#E50000' : 'transparent',
                           borderColor: toggleSearch ? 'red' : 'transparent',
                           borderRadius: '10px',
                           backgroundColor: '#252525',
                           transition: 'width 500ms linear',
                           padding: toggleSearch ? '0px 10px' : 0,
                       }}
                   />
                   <Button
                       onClick={() => {
                           setToggleSearch(!toggleSearch);
                           if (toggleSearch) {
                               setModalSearchList(false);
                           }
                           if (!toggleSearch && inputSearch.length > 0) {
                               setModalSearchList(true);
                           }
                       }}
                       sx={{
                           backgroundColor: toggleSearch ? 'red' : 'transparent',
                       }}
                   >
                       <IconSearch/>
                   </Button>
                   <Button>
                       <IconNotifications/>
                   </Button>
               </Box>

               {/*🖥🖥🦄PC version header navigation end🦄🖥🖥*/}
               {/* 📱📱📱 Mobile version header navigation start */}
               <Box
                   sx={{
                       display: {xs: 'block', md: 'none'},
                   }}
               >
                   <Button
                        onClick={() => {
                            setMobileMenuIsOpen(true);

                        }}
                        href={'#header'}
                   >
                       <IconMobileMenu/>
                   </Button>
               </Box>
               {/* 📱📱🦄 Mobile version header navigation start 📱📱🦄*/}
           </Box>
           <Box
               sx={{
                   display: {xs: 'block', md: 'none'},
               }}
           >
              <MobileHeaderMenu stateOpenMobileMenu={mobileMenuIsOpen} toggleMenu={handleOpenMobileMenu}/>
           </Box>
           {modalSearchList && createPortal(
               <ModalWindowSearchList
                    data={dataSearchList}
                    tabsStateAndControl={[whatTabsSelected, setWhatTabsSelected]}
                    inputValue={inputSearch}
               />
               , document.querySelector('#sectionSearch')
           )}
       </Container>
    )
}