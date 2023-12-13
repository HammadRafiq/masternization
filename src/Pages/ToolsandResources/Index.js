import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import LoadButton from '../../Components/Common/LoadButton';
import CustomTextField from '../../Components/Common/CustomTextField';
import FormFooter from '../../Components/Common/FormFooter';
import Heart from '../../Assets/heart.svg'
import InfoCircle from '../../Assets/info-circle.svg'
import SecondaryHeader from '../../Components/Common/SecondaryHeader';
import BookImg from '../../Assets/book_icon.svg'
import Typography from '@mui/material/Typography';
import BookLinkIcon from '../../Assets/book_link_icon.svg'
import BookCard from '../../Components/Books/BookCard';
import { Form } from 'react-router-dom';
import ToolImg from '../../Assets/ToolIcon.svg'
import ToolsCard from '../../Components/Tools/ToolsCard';

const bloggingTutorials = {
    "tools": [
        {
            "id": 1,
            "title": "Blogging",
            "instructor": 'Dale Strong',
            "imageURL": BookImg,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 2,
            "title": "Blogging",
            "instructor": 'Dale Strong',
            "imageURL": BookImg,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 3,
            "title": "Blogging",
            "instructor": 'Dale Strong',
            "imageURL": BookImg,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 4,
            "title": "Blogging",
            "instructor": 'Dale Strong',
            "imageURL": BookImg,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 5,
            "title": "Blogging",
            "instructor": 'Dale Strong',
            "imageURL": BookImg,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 6,
            "title": "Blogging",
            "instructor": 'Dale Strong',
            "imageURL": BookImg,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 7,
            "title": "Blogging",
            "instructor": 'Dale Strong',
            "imageURL": BookImg,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 8,
            "title": "Blogging",
            "instructor": 'Dale Strong',
            "imageURL": BookImg,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 9,
            "title": "Blogging",
            "instructor": 'Dale Strong',
            "imageURL": BookImg,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
    ],
};

const Tools = () => {
    return (
        <>
            <Box className="pl-100 pr-100 pb-100" sx={{ flexGrow: 1 }}>
                <SecondaryHeader title={'Blogging Tools & Resources'} />
                <Grid container spacing={2.5}>
                    {
                        bloggingTutorials.tools.map((tool) => {
                            return (
                                <ToolsCard />
                            )
                        })
                    }
                </Grid>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '49px' }}>
                    <LoadButton text={'More Tools & Resources'} />
                </Box>
            </Box>
            <FormFooter
                title={'Submit a Tool or a Resource'}
                description1={'If you wish to submit a tutorial for potential listing on Masternization, kindly fill the form below.'}
                description2={'(If you are the creator of the tutorial, please submit it using the Creator Dashboard in My Account page)'}
                label1={'Tool Name'}
                placeholder1={'Enter the name of the tool'}
                label2={'Tool URL'}
                placeholder2={'Paste the URL of the tool here'}
            />
        </>
    )
}

export default Tools