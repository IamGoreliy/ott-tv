import {styled} from "@mui/material";
import Image from "next/image";

export const ImageMUI = styled(props => {
    const {src, alt, width, height, sx, ...other} = props;
    return <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...other}
        />
})(({sx, theme}) => {
    return {
        ...sx,
        [theme.breakpoints.up('sm')]: {
            objectFit: 'contain',
        },
        [theme.breakpoints.up('md')]: {
            objectFit: 'unset',
        }
    }
});