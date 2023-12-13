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
import Blogging1 from '../../Assets/books/blogging.png'
import PassiveIncome2 from '../../Assets/books/passive-income.png'
import MakeMoney from '../../Assets/books/make-money.png'
import PassiveIncomeIdeas from '../../Assets/books/passive-income-ideas.png'
import EverybodyWrites from '../../Assets/books/everybody-writes.png'
import ExpertSecrets from '../../Assets/books/expert-secrets.png'
import MoneyOnline from '../../Assets/books/money-online.png'
import BloggingPortfolio from '../../Assets/books/blogging-portfolio.png'


const bloggingTutorials = {
    "books": [
        {
            "id": 1,
            "title": "Blogging",
            "instructor": 'Dale Strong',
            "imageURL": Blogging1,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 2,
            "title": "Passive Income",
            "instructor": 'Dale Strong',
            "imageURL": PassiveIncome2,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 3,
            "title": "Make Money Blogging",
            "instructor": 'Dale Strong',
            "imageURL": MakeMoney,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 4,
            "title": "Passive Income Ideas",
            "instructor": 'Dale Strong',
            "imageURL": PassiveIncomeIdeas,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 5,
            "title": "Everybody Writes",
            "instructor": 'Dale Strong',
            "imageURL": EverybodyWrites,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 6,
            "title": "Expert Secrets",
            "instructor": 'Dale Strong',
            "imageURL": ExpertSecrets,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 7,
            "title": "Make Money Online",
            "instructor": 'Dale Strong',
            "imageURL": MoneyOnline,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 8,
            "title": "Write Blogs",
            "instructor": 'Dale Strong',
            "imageURL": BloggingPortfolio,
            "favorite": Heart,
            "info": InfoCircle,
            "courseLink": "http://localhost:3000/",
        },

    ],
};

const Books = () => {
    return (
        <>
            <Box className="padding-all" sx={{ flexGrow: 1 }}>
                <SecondaryHeader title={'Blogging Books'} />
                <Grid container spacing={2.5}>
                    {
                        bloggingTutorials.books.map((book) => {
                            return (
                                <BookCard book={book} />
                            )
                        })
                    }
                </Grid>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '49px' }}>
                    <LoadButton text={'More Books'} />
                </Box>
            </Box>

            <FormFooter
                title={'Submit a Book'}
                description1={'If you wish to submit a tutorial for potential listing on Masternization, kindly fill the form below.'}
                description2={'(If you are the creator of the tutorial, please submit it using the Creator Dashboard in My Account page)'}
                label1={'Book Name'}
                placeholder1={'Enter the name of the book'}
                label2={'Book URL'}
                placeholder2={'Paste the URL of the book here'}
            />
        </>
    )
}

export default Books