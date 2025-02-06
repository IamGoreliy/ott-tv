import {Box} from "@mui/material";
import {ImageMUI} from "@/utils/customComponents";

export const BackgroundMaker = ({arrImage = [], parametersImg = []}) => {
    const [widthImg, heightImg] = parametersImg;
    return (
        <Box
            sx={{
                position: 'absolute',
                top: -50,
                left: -100,
                zIndex: -1,
            }}
        >
            {arrImage.length > 0 && arrImage.map((ele, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            '& + &': {
                              marginTop: '20px',
                            },
                        }}
                    >
                        <ImageMUI
                            src={ele}
                            alt={''}
                            width={widthImg}
                            height={heightImg}
                        />
                    </Box>
                )
            })}
        </Box>
    )
}