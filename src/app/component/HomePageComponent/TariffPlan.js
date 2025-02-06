import {Box, Button, Grid2, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {useState} from "react";

const tariffData = [
    {
        id: 1,
        title: 'Basic Plan',
        desc: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
        price: (period) => period === 'monthly' ? '9.99' : '7.99',
    },
    {
        id: 2,
        title: 'Standard Plan',
        desc: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
        price: (period) => period === 'monthly' ? '12.99' : '9.99',
    },
    {
        id: 3,
        title: 'Premium Plan',
        desc: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
        price: (period) => period === 'monthly' ? '14.99' : '12.99',
    }
];


// 🌈🌈🌈 styling component start

const titleStyling = {
    fontSize: {xs: '24px', md: '38px'},
    fontWeight: 'bold',
    fontFamily: 'Manrope, sans-serif',
    color: 'white',
};

const descStyling = {
    fontSize: {xs: '14px', md: '18px'},
    fontWeight: '400',
    fontFamily: 'Manrope, sans-serif',
    color: '#999999',
    marginTop: '14px',
};

const choseCategoryTitleStyling = {
    fontSize: '24px',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 'bold',
    lineHeight: 1.5,
    color: 'white'
};

const choseCategoryDescStyling = {
    fontSize: '18px',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 'Regular',
    lineHeight: 1.5,
    color: '#999999',
};

const priceStyling = {
    fontSize: '40px',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '700',
    lineHeight: 0.73,
    color: 'white',
};

const CustomSpan = styled.span`
    font-size: 18px;
    font-weight: 500;
    font-family: Manrope, sans-serif ;
    line-height: 0.73;
`;

const btnActionStyling = {
    flexBasis: 'calc(100% / 2)',
    color: 'white',
    backgroundColor: 'red'
}

// 🌈🌈🌈 styling component end
export const TariffPlan = () => {
    const [period, setPeriod] = useState('monthly');

    const handlerChangePeriod = (event) => {
        const contentBtn = event.target.textContent.toLowerCase();
        setPeriod(contentBtn);
    }

    return (
        <Box
            sx={{
                padding: {xs: '40px 0px', md: '50px 0 100px'},
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    alignItems: {xs: 'center', md: 'end'},
                    columnGap: {xs: 'unset', md: '20px'}
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            ...titleStyling,
                        }}
                    >
                        Choose the plan that&apos;s right for you
                    </Typography>
                    <Typography
                        sx={{
                            ...descStyling,
                        }}
                    >
                        Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
                    </Typography>
                </Box>
                <Box
                    sx={{
                        ml: {xs: '0px', md: 'auto'},
                        display: 'flex',
                        flexWrap: 'no-wrap',
                        padding: '10px',
                        height: '75px',
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        borderRadius: '10px',
                    }}
                >
                    <Button
                        onClick={handlerChangePeriod}
                        sx={{
                            width: '118px',
                            height: '55px',
                            color: period === 'monthly' ? 'white' : '#999999',
                            backgroundColor: period === 'monthly' ? 'RGBA(43, 43, 43, 1)' : 'transparent',
                        }}
                    >
                        Monthly
                    </Button>
                    <Button
                        onClick={handlerChangePeriod}
                        sx={{
                            width: '99px',
                            height: '55px',
                            color: period === 'yearly' ? 'white' : '#999999',
                            backgroundColor: period === 'yearly' ? 'RGBA(43, 43, 43, 1)' : 'transparent',
                        }}
                    >
                        Yearly
                    </Button>
                </Box>
            </Box>
            <Grid2
                container
                spacing={2}
                sx={{
                    mt: {xs: '40px', md: '80px'},
                }}
            >
                {tariffData.map(ele => {
                    const {id, title, desc, price} = ele;
                    return (
                        <Grid2
                            key={id}
                            size={{xs: 12,md: 4}}
                            sx={{
                                padding: {xs: '20px', md:'50px'},
                                borderRadius: '12px',
                                backgroundColor: 'rgba(35, 35, 35, 1)',
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        ...choseCategoryTitleStyling,
                                    }}
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    sx={{
                                        ...choseCategoryDescStyling,
                                    }}
                                >
                                    {desc}
                                </Typography>
                                <Typography
                                    sx={{
                                        ...priceStyling,
                                        mt: '50px'
                                    }}
                                >
                                    ${price(period)}<CustomSpan>/{period}</CustomSpan>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    mt: '50px',
                                }}
                            >
                                <Button
                                    sx={{
                                        ...btnActionStyling,
                                        backgroundColor: 'transparent',
                                    }}
                                >
                                    Start Free Trial
                                </Button>
                                <Button
                                    sx={{
                                        ...btnActionStyling,
                                    }}
                                >
                                    Choose Plan
                                </Button>
                            </Box>
                        </Grid2>
                    )
                })}
            </Grid2>
        </Box>
    )
}