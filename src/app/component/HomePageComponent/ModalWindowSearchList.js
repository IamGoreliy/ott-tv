import {Box, Button, Typography} from "@mui/material";
import {keyframes} from "@emotion/react";
import {IconLoading} from "@/utils/createSvg";
import {MiniListForFilter} from "@/app/component/HomePageComponent/MiniListForFilter";
import styled from "@emotion/styled";

const loadingAnimation = keyframes`
    10% {
        transform: rotate(36deg);    
    }
    20% {
        transform: rotate(72deg);
    }
    30% {
        transform: rotate(108deg);
    }
    40% {
        transform: rotate(144deg);
    }
    50% {
        transform: rotate(180deg);
    }
    60% {
        transform: rotate(216deg);
    }
    70% {
        transform: rotate(252deg);
    }
    80% {
        transform: rotate(288deg);
    }
    90% {
        transform: rotate(324deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const buttonName = ['Multi', 'Film', 'Actor'];

const ButtonIsActive = styled(props => {
    const {sx, isOpen, nameBtn, ...other} = props;
    return <Button sx={sx} {...other}/>
})(({sx, isOpen, nameBtn}) => {
    return {
        textTransform: 'none',
        // minWidth: '0px',
        backgroundColor: nameBtn.toLowerCase() === isOpen ? 'red' : 'transparent',
        color: nameBtn.toLowerCase() === isOpen ? 'white' : 'black',
        ...sx,
    }
})

export const ModalWindowSearchList = ({data, tabsStateAndControl: [state, changeState], inputValue}) => {

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 50,
                left: 0,
                padding: '10px',
                width: '300px',
                height: '320px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '15px 15px 10px -4px rgba(0,0,0,0.75)',
            }}
        >
            <Box
                componet={'ul'}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    borderBottom: '1px solid black',
                    padding: 0,
                    listStyle: 'none',
                }}
            >
                {buttonName.map((ele, index) => {
                    return (
                        <Box
                            key={index}
                            component={'li'}
                        >
                            <ButtonIsActive
                                onClick={() => changeState(ele.toLowerCase())}
                                isOpen={state}
                                nameBtn={ele}
                            >
                                {ele}
                            </ButtonIsActive>
                        </Box>
                    )
                })}
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    height: '260px',
                }}
            >
                {data.length > 0
                    ? <MiniListForFilter data={data} inputValue={inputValue} selectedTab={state}/>
                    : <IconLoading
                        sx={{
                            position: 'absolute',
                            top: '38%',
                            left: '43%',
                            fill: 'red',
                            width: '50px',
                            height: '50px',
                            animation: `${loadingAnimation} 1500ms linear infinite;`,
                        }}
                    />
                }
            </Box>
        </Box>
    )
}