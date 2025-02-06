import {Container, Box} from "@mui/material";
import {Header} from "@/app/component/Header";
import {Footer} from "@/app/component/Footer";

const Template = ({children}) => {


    return (
        <>
            <Header/>
            <Container
                maxWidth='xl'
            >
                    {children}
            </Container>
            <Footer/>
        </>
    );
}

export default Template;