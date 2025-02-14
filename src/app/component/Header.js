'use client';
import {Box, Button, Container} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";
import {IconMobileMenu, IconNotifications, IconSearch} from "@/utils/createSvg";
import {useState} from "react";
import {MobileHeaderMenu} from "@/app/component/MobileHeaderMenu";
import {useRouter} from "next/navigation";


const headerBtnNav = [
    {
        nameBtn: 'Home',
        link: '/'
    },
    {
        nameBtn: 'Movies & Shows',
        link: '/movieandserial'
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
export const Header = () => {
    const [toggleSearch, setToggleSearch] = useState(false);
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const router = useRouter();

    const handleOpenMobileMenu = () => {
        setMobileMenuIsOpen(false);
    }

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
                   sx={{
                       display: {xs: 'none', md: 'block'},
                       position: 'relative'
                   }}
               >
                   {/*поиск уведомления*/}
                   <Box
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
                       onClick={() => setToggleSearch(!toggleSearch)}
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
       </Container>
    )
}