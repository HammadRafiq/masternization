import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import LoadButton from '../../Components/Common/LoadButton';
import CustomTextField from '../../Components/Common/CustomTextField';
import FormFooter from '../../Components/Common/FormFooter';
import BloggingCourseCard from '../../Components/Courses/BloggingCourseCard';
import DollarCircle from '../../Assets/dollar-circle.svg'
import PercentageCircle from '../../Assets/percentage-circle.svg'
import BloggingIcon from '../../Assets/blogging_course.svg'
import Heart from '../../Assets/heart.svg'
import InfoCircle from '../../Assets/info-circle.svg'
import SecondaryHeader from '../../Components/Common/SecondaryHeader';
import BloggingTutorialsCard from '../../Components/Tutorials/BloggingTutorialsCard';
import Youtubechannelimg from '../../Assets/youtube_channel_icon.svg'
import YoutubeChannelCard from '../../Components/YoutubeChannels/YoutubeChannelCard';
import Typography from '@mui/material/Typography';
import UserIcon from '../../Assets/blogging_course.svg'
import CurveBg from '../../Assets/curved-background.svg'
import Ellipse from '../../Assets/ellipse.svg'
import JobCard from '../../Components/Jobs/JobCard';

const bloggingCourse = {
    "jobs": [
      {
        "id": 1,
        "title": "Project 24",
        "instructor":'Income School',
        "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
        "imageURL": BloggingIcon,
        "favorite":Heart,
        "info":InfoCircle,
        "coursemode":DollarCircle,
        "coursemodecolor":'var(--purple)',
        "courseLink":"http://localhost:3000/",
    },
    {
        "id": 2,
        "title": "Project 24",
        "instructor":'Income School',
        "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
        "imageURL": BloggingIcon,
        "favorite":Heart,
        "info":InfoCircle,
        "coursemode":PercentageCircle,
        "coursemodecolor":'#009217;',
        "courseLink":"http://localhost:3000/",
    },
    {
        "id": 3,
        "title": "Project 24",
        "instructor":'Income School',
        "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
        "imageURL": BloggingIcon,
        "favorite":Heart,
        "info":InfoCircle,
        "coursemode":DollarCircle,
        "coursemodecolor":'var(--purple)',
        "courseLink":"http://localhost:3000/",
    },
    {
        "id": 4,
        "title": "Project 24",
        "instructor":'Income School',
        "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
        "imageURL": BloggingIcon,
        "favorite":Heart,
        "info":InfoCircle,
        "coursemode":DollarCircle,
        "coursemodecolor":'var(--purple)',
        "courseLink":"http://localhost:3000/",
    },
    {
        "id": 5,
        "title": "Project 24",
        "instructor":'Income School',
        "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
        "imageURL": BloggingIcon,
        "favorite":Heart,
        "info":InfoCircle,
        "coursemode":DollarCircle,
        "coursemodecolor":'var(--purple)',
        "courseLink":"http://localhost:3000/",
    },
    {
        "id": 6,
        "title": "Project 24",
        "instructor":'Income School',
        "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
        "imageURL": BloggingIcon,
        "favorite":Heart,
        "info":InfoCircle,
        "coursemode":DollarCircle,
        "coursemodecolor":'var(--purple)',
        "courseLink":"http://localhost:3000/",
    },
    {
        "id": 7,
        "title": "Project 24",
        "instructor":'Income School',
        "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
        "imageURL": BloggingIcon,
        "favorite":Heart,
        "info":InfoCircle,
        "coursemode":DollarCircle,
        "coursemodecolor":'var(--purple)',
        "courseLink":"http://localhost:3000/",
    },
    {
        "id": 8,
        "title": "Project 24",
        "instructor":'Income School',
        "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
        "imageURL": BloggingIcon,
        "favorite":Heart,
        "info":InfoCircle,
        "coursemode":DollarCircle,
        "coursemodecolor":'var(--purple)',
        "courseLink":"http://localhost:3000/",
    },
    {
        "id": 9,
        "title": "Project 25",
        "instructor":'Income School',
        "description": "Many people were hoping that if the Democrats won control of Congress they would reverse the online",
        "imageURL": BloggingIcon,
        "favorite":Heart,
        "info":InfoCircle,
        "coursemode":DollarCircle,
        "coursemodecolor":'var(--purple)',
        "courseLink":"http://localhost:3000/",
    },
  ],
  };

const MasterBlogging = () => {
  return (
    <>
    <Box className="padding-all" sx={{ flexGrow:1 }}>
        <Box sx={{textAlign:'center',marginBottom:'42px'}}>
            <h5 className="small-tagline letting-spacing-6 mb-12">Get Inspired</h5>
            <h3 className="mb-16">Blogging Success Stories</h3>
            <p className="p-primary">
            Blogging is a way of creating and sharing content on the internet to connect with an audience.
            </p>
        </Box>
        <Grid container spacing={2.5}>

        {
            bloggingCourse.jobs.map((job) => {
                return(
                    <JobCard /> 
                )
            })
        }           

        </Grid>

        <Box sx={{textAlign:'center',marginTop:'100px',marginBottom:'42px'}}>
            <h5 className="small-tagline letting-spacing-6 mb-12">Explore</h5>
            <h3 className="mb-16">How To Start Blogging</h3>
            <p className="p-primary">
            Blogging is a way of creating and sharing content on the internet to connect with an audience.
            </p>
        </Box>
    </Box>
    </>
  )
}

export default MasterBlogging