import {Container, Box} from "@mui/material";
import {Header} from "@/app/component/Header";
import {Footer} from "@/app/component/Footer";

const Template = ({children}) => {
    return (
        <Container
            maxWidth='xl'
        >
            <Header/>
                {children}
            <Footer/>
        </Container>
    );
}

export default Template;