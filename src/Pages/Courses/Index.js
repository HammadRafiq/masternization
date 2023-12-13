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

const bloggingCourse = {
  "courses": [
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

const Courses = () => {
  return (
    <>
      <Box className="pl-100 pr-100 pb-100" sx={{ flexGrow: 1 }}>
        <SecondaryHeader title={'Blogging Courses'} />
        <Grid container spacing={2.5}>
          {
            bloggingCourse.courses.map((course) => {
              return (
                <BloggingCourseCard
                  id={course.id}
                  title={course.title}
                  instructor={course.instructor}
                  description={course.description}
                  imgurl={course.imageURL}
                  favorite={course.favorite}
                  info={course.info}
                  coursemode={course.coursemode}
                  courselink={course.courseLink}
                  coursemodecolor={course.coursemodecolor}
                />
              )
            })
          }

        </Grid>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '49px' }}>
          <LoadButton text={'More Courses'} />
        </Box>
      </Box>

      <FormFooter
        title={'Submit a Course'}
        description1={'If you wish to submit a course for potential listing on Masternization, kindly fill the form below.'}
        description2={'(If you are the creator of the course, please submit it using the Creator Dashboard in My Account page)'}
        label1={'Course Name'}
        placeholder1={'Enter the name of the course'}
        label2={'Course URL'}
        placeholder2={'Paste the URL of the course here'}
      />

    </>
  )
}

export default Courses