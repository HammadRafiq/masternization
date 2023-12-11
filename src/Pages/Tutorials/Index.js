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

const bloggingTutorials = {
    "courses": [
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

const Tutorials = () => {
  return (
    <>
    <Box className="padding-all" sx={{ flexGrow:1 }}>
      <SecondaryHeader title={'Blogging Tutorials'} />
      <Grid container spacing={2.5}>
        {
            bloggingTutorials.courses.map((tutorial) => {
                return(
                    <BloggingTutorialsCard />
                )
            })
        }
      </Grid>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'49px'}}>
      <LoadButton text={'More Tutorials'} />
    </Box>
  </Box>


    <FormFooter
  title={'Submit a Tutorial'}
  description1={'If you wish to submit a tutorial for potential listing on Masternization, kindly fill the form below.'}
  description2={'(If you are the creator of the tutorial, please submit it using the Creator Dashboard in My Account page)'}
  label1={'Tutorial Name'}
  placeholder1={'Enter the name of the tutorial'}
  label2={'Tutorial URL'}
  placeholder2={'Paste the URL of the tutorial here'}
  />
    </>
  )
}

export default Tutorials