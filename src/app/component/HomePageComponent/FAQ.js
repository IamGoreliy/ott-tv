import {Box, Button, Grid2, Typography} from "@mui/material";
import {useState} from "react";
import {IconMinus, IconPlus} from "@/utils/createSvg";

const question = [
    {
        id: 1,
        question: 'What is StreamVibe?',
        answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand',
    },
    {
        id: 2,
        question: 'How much does StreamVibe cost?',
        answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand',
    },
    {
        id: 3,
        question: 'What content is available on StreamVibe?',
        answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand',
    },
    {
        id: 4,
        question: 'How can I watch StreamVibe?',
        answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand',
    },
    {
        id: 5,
        question: 'How do I sign up for StreamVibe?',
        answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand',
    },
    {
        id: 6,
        question: 'What is the StreamVibe free trial?',
        answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand',
    },
    {
        id: 7,
        question: 'How do I contact StreamVibe customer support?',
        answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand',
    },
    {
        id: 8,
        question: 'What are the StreamVibe payment methods?',
        answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand',
    },
];

// 🌈🌈🌈 styling start

const titleStyling = {
    fontSize: {xs: '20px', md: '38px'},
    fontWeight: 'bold',
    fontFamily: 'Manrope, sans-serif',
    color: 'white',
};

const subTitleStyling = {
    fontSize: {xs: '14px', md: '18px'},
    fontWeight: '400',
    fontFamily: 'Manrope, sans-serif',
    color: '#999999',
    marginTop: '14px',
};

const questionStyling = {
    fontSize: '22px',
    fontWeight: 'medium',
    fontFamily: 'Manrope, sans-serif',
    color: 'white',
};

const answerStyling = {
    fontSize: '18px',
    fontWeight: '400',
    fontFamily: 'Manrope, sans-serif',
    color: '#999999',
}

//🌈🌈🌈 styling end


export const FAQ = () => {
    const [whatQuestionIsOpen, setWhatQuestionIsOpen] = useState(null);

    const handleOpenAnswer = (id) => {
        if (whatQuestionIsOpen === id) {
            setWhatQuestionIsOpen(null);
            return;
        }
        setWhatQuestionIsOpen(id);
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
                    justifyContent: 'space-between',
                    alignItems: {xs: 'left', md: 'center'},
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            ...titleStyling,
                        }}
                    >
                        Frequently Asked Questions
                    </Typography>
                    <Typography
                        sx={{
                            ...subTitleStyling,
                        }}
                    >
                        Got questions? We&apos;ve got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
                    </Typography>
                </Box>
                <Box>
                    <Button
                        sx={{
                            mt: {xs: '20px', md: 'unset'},
                            textTransform: 'none',
                            backgroundColor: 'red',
                            color: 'white',
                        }}
                    >
                        Ask a Question
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    flexWrap: 'wrap',
                    height: {xs: 'unset', md: '615px'},

                }}
            >
                {question.map(ele => {
                    const {id, question, answer} = ele;
                    return (
                        <Box
                            key={id}
                            onClick={() => handleOpenAnswer(id)}
                            sx={{
                                width: {xs: '100%', md: '50%'},
                                cursor: 'pointer'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    padding: '30px 34px',

                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '82px',
                                        height: '62px',
                                        backgroundColor: '#2A2A2A',
                                        borderRadius: '10px',
                                    }}
                                >
                                    0{id}
                                </Box>
                                <Box
                                    sx={{
                                        ml: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        // justifyContent: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            padding: '10px 0 20px',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ...questionStyling,
                                            }}
                                        >
                                            {question}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            height: whatQuestionIsOpen === id ? '50px' : '0px',
                                            overflow: 'hidden',
                                            transition: 'height 500ms linear',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ...answerStyling,
                                            }}
                                        >
                                            {answer}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '64px',
                                        height: '62px',
                                    }}
                                >
                                    <Button>
                                        {whatQuestionIsOpen === id ? <IconPlus/> : <IconMinus/>}
                                    </Button>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '1px',
                                    background: 'linear-gradient(90deg, rgba(229,0,0,0) 0%, rgba(229,0,0,1) 17%, rgba(229,0,0,0) 100%)',
                                }}
                            >

                            </Box>

                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}