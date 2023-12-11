import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import PickACourseCards from '../../Components/Home/PickACourseCards';
import IconImg from '../../Assets/icon_skill.png'
import LoadButton from '../../Components/Common/LoadButton';
import MasterFeatures from '../../Components/Home/MasterFeatures';
import Typography from '@mui/material/Typography';
import HeroBanner from '../../Assets/hero_banner.svg';
import HeroBannerBg from '../../Assets/hero_banner_bg.svg'
import CustomTextField from '../../Components/Common/CustomTextField';
import FormFooter from '../../Components/Common/FormFooter';


const pickCourse = {
  "courses": [
    {
      "id": 1,
      "title": "Web Development",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": IconImg,
      "courseLink":"http://localhost:3000/",
  },
  {
      "id": 2,
      "title": "Web Development",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": IconImg,
      "courseLink":"http://localhost:3000/",
  },
  {
      "id": 3,
      "title": "Web Development",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": IconImg,
      "courseLink":"http://localhost:3000/",
  },
  {
      "id": 4,
      "title": "Web Development",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": IconImg,
      "courseLink":"http://localhost:3000/",
  },
  {
      "id": 5,
      "title": "Web Development",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": IconImg,
      "courseLink":"http://localhost:3000/",
  },
  {
      "id": 6,
      "title": "Web Development",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": IconImg,
      "courseLink":"http://localhost:3000/",
  },
  {
    "id": 7,
    "title": "Web Development",
    "description": "Master the art of web development with our expert-led courses.",
    "imageURL": IconImg,
    "courseLink":"http://localhost:3000/",
},
{
  "id": 8,
  "title": "Web Development",
  "description": "Master the art of web development with our expert-led courses.",
  "imageURL": IconImg,
  "courseLink":"http://localhost:3000/",
},
{
  "id": 9,
  "title": "Web Development",
  "description": "Master the art of web development with our expert-led courses.",
  "imageURL": IconImg,
  "courseLink":"http://localhost:3000/",
},
],
"mastermode":[
  {
    "number":910,
    "title":"Courses",
  },
  {
    "number":475,
    "title":"Tutorials",
  },
  {
    "number":784,
    "title":"Books",
  },
  {
    "number":623,
    "title":"Tools & Resources",
  },
  {
    "number":881,
    "title":"YouTube Channels",
  },
  {
    "number":557,
    "title":"Groups & Forums",
  },
  {
    "number":489,
    "title":"Jobs",
  },
]  
};

const Home = () => {
  return (
    <>
    <Box className="padding-all-left">
      <Grid container space={2}>
        <Grid item xs={9}>
          <h5 className="small-tagline left margin-16">Gain Skills; Make Money.</h5>
          <Typography class="h3 hero-heading" variant="h3">
            Earn Your First Dollar... <br />Or Your First Million Starting From 0
          </Typography>
          <Typography variant="body1" sx={{
            fontSize:'24px',
            lineHeight:'35px',
            margin:'30px 0 25px'
          }}>
          We give you all you need to become an expert in your field, whether you are starting from scratch or not - courses, tutorials, books, tools and much more.
          </Typography>
          <LoadButton text={'Start Your Journey'} />
        </Grid>
        <Grid item xs={3} sx={{
          background:HeroBannerBg,
        }}>
        </Grid>
      </Grid>
    </Box>
    <Box className="padding-48 mastermode light-purple">
      <h3 className="center">#MasterMode</h3>
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'40px'}}>
        {
          pickCourse.mastermode.map((feature) => {
            return(
              <MasterFeatures number={feature.number} title={feature.title} />
            )
          })
        }
      </Box>
    </Box>
    <Box className="padding-all" sx={{ flexGrow:1 }}>
      <Box sx={{ maxWidth:'726px', margin:'0 auto 61px'}}>
        <h5 className="center small-tagline">Explore Opportunities</h5>
        <h2 className="center">Pick a Course. <br/>Master a Skill.</h2>
        <p className="center p-primary padding-40">Explore boundless opportunities for personal and professional growth through expert-led courses, tutorials, and mentorship with Pineapple.</p>
        <Box>
          <Grid container spacing={4} sx={{display:'flex',alignItems:'center'}}>
            <Grid item xs={9}>
              <CustomTextField placeholder={'Search courses'} borderRadius={'40px'} bgColor={'#EBEBEC'} paddingLeft={'16px'} />
            </Grid>
            <Grid item xs={3}>
              <LoadButton text={'More Courses'} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    <Grid container spacing={2.5}>
      {
        pickCourse.courses.map((course) => {
          return(
            <PickACourseCards id={course.id} title={course.title} des={course.description} />
          )
        })
      }
    </Grid>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'49px'}}>
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

export default Home