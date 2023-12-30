import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import FormFooter from '../../Components/Common/FormFooter';
import DollarCircle from '../../Assets/dollar-circle.svg'
import PercentageCircle from '../../Assets/percentage-circle.svg'
import BloggingIcon from '../../Assets/blogging_course.svg'
import Heart from '../../Assets/heart.svg'
import InfoCircle from '../../Assets/info-circle.svg'
import JobCard from '../../Components/Jobs/JobCard';
import StartBloggingCard from '../../Components/MasterBlogging/StartBloggingCard';
import BloggingJobCard from '../../Components/MasterBlogging/BloggingJobCard';
import BloggingBusinessCard from '../../Components/MasterBlogging/BloggingBusinessCard';
import LoadButton from '../../Components/Common/LoadButton';

const bloggingCourse = {
    "jobs": [
        {
            "id": 1,
            "title": "Project 24",
            "instructor": 'Income School',
            "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
            "imageURL": BloggingIcon,
            "favorite": Heart,
            "info": InfoCircle,
            "coursemode": DollarCircle,
            "coursemodecolor": 'var(--purple)',
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 2,
            "title": "Project 24",
            "instructor": 'Income School',
            "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
            "imageURL": BloggingIcon,
            "favorite": Heart,
            "info": InfoCircle,
            "coursemode": PercentageCircle,
            "coursemodecolor": '#009217;',
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 3,
            "title": "Project 24",
            "instructor": 'Income School',
            "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
            "imageURL": BloggingIcon,
            "favorite": Heart,
            "info": InfoCircle,
            "coursemode": DollarCircle,
            "coursemodecolor": 'var(--purple)',
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 4,
            "title": "Project 24",
            "instructor": 'Income School',
            "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
            "imageURL": BloggingIcon,
            "favorite": Heart,
            "info": InfoCircle,
            "coursemode": DollarCircle,
            "coursemodecolor": 'var(--purple)',
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 5,
            "title": "Project 24",
            "instructor": 'Income School',
            "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
            "imageURL": BloggingIcon,
            "favorite": Heart,
            "info": InfoCircle,
            "coursemode": DollarCircle,
            "coursemodecolor": 'var(--purple)',
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 6,
            "title": "Project 24",
            "instructor": 'Income School',
            "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
            "imageURL": BloggingIcon,
            "favorite": Heart,
            "info": InfoCircle,
            "coursemode": DollarCircle,
            "coursemodecolor": 'var(--purple)',
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 7,
            "title": "Project 24",
            "instructor": 'Income School',
            "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
            "imageURL": BloggingIcon,
            "favorite": Heart,
            "info": InfoCircle,
            "coursemode": DollarCircle,
            "coursemodecolor": 'var(--purple)',
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 8,
            "title": "Project 24",
            "instructor": 'Income School',
            "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
            "imageURL": BloggingIcon,
            "favorite": Heart,
            "info": InfoCircle,
            "coursemode": DollarCircle,
            "coursemodecolor": 'var(--purple)',
            "courseLink": "http://localhost:3000/",
        },
        {
            "id": 9,
            "title": "Project 25",
            "instructor": 'Income School',
            "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
            "imageURL": BloggingIcon,
            "favorite": Heart,
            "info": InfoCircle,
            "coursemode": DollarCircle,
            "coursemodecolor": 'var(--purple)',
            "courseLink": "http://localhost:3000/",
        },
    ],
};

const MasterBlogging = () => {
    return (
        <>

            <Box className="pl-100 pr-100 pb-100" sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '12px', margin: '100px 0 32px' }}>
                    <LoadButton text={'Master Blogging'} styleProps={{ fontSize: '16px', fontFamily: 'DM Sans !important', fontWeight: 400, letterSpacing: '-0.48px', height:'44px', minWidth:'160px' }} />
                    <LoadButton text={'Become a Blogger'} styleProps={{ background: 'var(--dark-purple)', fontSize: '16px', fontFamily: 'DM Sans !important', fontWeight: 400, letterSpacing: '-0.48px', height:'44px', minWidth:'160px' }} />
                </Box>
                <Box>
                    <h2 className="center main-heading">Master Blogging</h2>
                </Box>
                <Box className="center" sx={{ margin: '100px 0 84px' }}>
                    <h3 className="mb-16">Introduction</h3>
                    <p className="p-primary">
                        Blogging is a way of creating and sharing content on the internet to connect with an audience. It involves regularly writing and publishing articles, called blog posts, on a website. These posts can cover various topics, such as personal interests, expertise, or products and services related to your business.
                    </p>
                </Box>
                <Box sx={{ textAlign: 'center', marginBottom: '42px' }}>
                    <h5 className="small-tagline letting-spacing-6 mb-12">Get Inspired</h5>
                    <h3 className="mb-16">Blogging Success Stories</h3>
                    <p className="p-primary">
                        Blogging is a way of creating and sharing content on the internet to connect with an audience.
                    </p>
                </Box>
                <Grid container spacing={2.5}>

                    {
                        bloggingCourse.jobs.map((job) => {
                            return (
                                <JobCard />
                            )
                        })
                    }

                </Grid>

                <Box>
                    <Box sx={{ textAlign: 'center', marginTop: '100px', marginBottom: '42px' }}>
                        <h5 className="small-tagline letting-spacing-6 mb-12">Explore</h5>
                        <h3 className="mb-16">How To Start Blogging</h3>
                        <p className="p-primary">
                            Blogging is a way of creating and sharing content on the internet to connect with an audience.
                        </p>
                    </Box>
                    <Grid container spacing={2.5}>
                        {
                            bloggingCourse.jobs.map((job) => {
                                return (
                                    <StartBloggingCard />
                                )
                            })
                        }
                    </Grid>
                </Box>
                <Box sx={{ textAlign: 'center', marginTop: '100px', marginBottom: '42px' }}>
                    <h5 className="small-tagline letting-spacing-6 mb-12">Find jobs</h5>
                    <h3 className="mb-16">How To Get A Blogging Job</h3>
                    <p className="p-primary">
                        Blogging is a way of creating and sharing content on the internet to connect with an audience.
                    </p>
                </Box>
                <Grid container spacing={2.5}>
                    {
                        bloggingCourse.jobs.map((job) => {
                            return (
                                <BloggingJobCard />
                            )
                        })
                    }
                </Grid>
                <Box>
                    <Box sx={{ textAlign: 'center', marginTop: '100px', marginBottom: '42px' }}>
                        <h5 className="small-tagline letting-spacing-6 mb-12">Be independent</h5>
                        <h3 className="mb-16">How To Start A Blogging Business</h3>
                        <p className="p-primary">
                            Blogging is a way of creating and sharing content on the internet to connect with an audience.
                        </p>
                    </Box>
                    <Grid container spacing={2.5}>
                        {
                            bloggingCourse.jobs.map((job) => {
                                return (
                                    <BloggingBusinessCard />
                                )
                            })
                        }
                    </Grid>
                </Box>
            </Box>

            <FormFooter
                title={'Submit a Success Story'}
                description1={'If you wish to submit a success story for potential listing on Masternization, kindly fill the form below.'}
                description2={''}
                label1={'Story Name'}
                placeholder1={'Enter the name of the story'}
                label2={'Story URL'}
                placeholder2={'Paste the URL of the story here'}
            />
        </>
    )
}

export default MasterBlogging