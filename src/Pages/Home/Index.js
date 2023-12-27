import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import PickACourseCards from '../../Components/Home/PickACourseCards';
import IconImg from '../../Assets/icon_skill.png'
import LoadButton from '../../Components/Common/LoadButton';
import MasterFeatures from '../../Components/Home/MasterFeatures';
import Typography from '@mui/material/Typography';
import CustomTextField from '../../Components/Common/CustomTextField';
import FormFooter from '../../Components/Common/FormFooter';
import { ReactComponent as BgRight } from "../../Assets/gradient-bg-right.svg"
import { ReactComponent as BgLeft } from "../../Assets/gradient-bg-left.svg"
import { ReactComponent as WebDev } from "../../Assets/courses/web-dev.svg"
import { ReactComponent as UI } from "../../Assets/courses/ui.svg"
import { ReactComponent as GraphicDesign } from "../../Assets/courses/graphic-design.svg"
import { ReactComponent as Blogging } from "../../Assets/courses/blogging.svg"
import { ReactComponent as Blockchain } from "../../Assets/courses/blockchain.svg"
import { ReactComponent as Photoshop } from "../../Assets/courses/photoshop.svg"
import { ReactComponent as Social } from "../../Assets/courses/social.svg"
import { ReactComponent as Animation } from "../../Assets/courses/animation.svg"
import { ReactComponent as Freelance } from "../../Assets/courses/freelance.svg"
import BannerBg from "../../Assets/banner-bg.png"


const pickCourse = {
  "courses": [
    {
      "id": 1,
      "title": "Web Development",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": WebDev,
      "courseLink": "http://localhost:3000/",
    },
    {
      "id": 2,
      "title": "UI/UX Design",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": UI,
      "courseLink": "http://localhost:3000/",
    },
    {
      "id": 3,
      "title": "Graphic Design",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": GraphicDesign,
      "courseLink": "http://localhost:3000/",
    },
    {
      "id": 4,
      "title": "Blogging",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": Blogging,
      "courseLink": "http://localhost:3000/",
    },
    {
      "id": 5,
      "title": "Blockchain Development",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": Blockchain,
      "courseLink": "http://localhost:3000/",
    },
    {
      "id": 6,
      "title": "Photoshop",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": Photoshop,
      "courseLink": "http://localhost:3000/",
    },
    {
      "id": 7,
      "title": "Social Media Management",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": Social,
      "courseLink": "http://localhost:3000/",
    },
    {
      "id": 8,
      "title": "Animation",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": Animation,
      "courseLink": "http://localhost:3000/",
    },
    {
      "id": 9,
      "title": "Freelance Writing",
      "description": "Master the art of web development with our expert-led courses.",
      "imageURL": Freelance,
      "courseLink": "http://localhost:3000/",
    },
  ],
  "mastermode": [
    {
      "number": 910,
      "title": "Courses",
    },
    {
      "number": 475,
      "title": "Tutorials",
    },
    {
      "number": 784,
      "title": "Books",
    },
    {
      "number": 623,
      "title": "Tools & Resources",
    },
    {
      "number": 881,
      "title": "YouTube Channels",
    },
    {
      "number": 557,
      "title": "Groups & Forums",
    },
    {
      "number": 489,
      "title": "Jobs",
    },
  ]
};

const Home = () => {
  return (
    <Box>
      <Box position="relative">
        <Grid container space={2}>
          <Grid item xs={12} md={7.5} zIndex={9} className="pt-100 pb-100 pl-100 pr-m">
            <h5 className="small-tagline left margin-16">Gain Skills; Make Money.</h5>
            <Typography class="h3 hero-heading" variant="h3">
              Earn Your First Dollar... <br />Or Your First Million Starting From 0
            </Typography>
            <Typography variant="body1" sx={{
              fontSize: {xs:'16px',md:'24px'},
              lineHeight: {xs:'26px',md:'35px'},
              margin: '30px 0 25px'
            }}>
              We give you all you need to become an expert in your field, whether you are starting from scratch or not - courses, tutorials, books, tools and much more.
            </Typography>
            <LoadButton text={'Start Your Journey'} />
          </Grid>
          <Grid item xs={12} md={4.5}>
            <Box height="100%" position="relative">
              <img
                src={BannerBg}
                alt='Masternization banner'
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "100%"
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="padding-48 mastermode light-purple">
        <h3 className="center">#MasterMode</h3>
        <Box sx={{ display: 'flex', alignItems: {xs:'start',md:'center'}, justifyContent: 'space-between', marginTop: {xs:'30px',md:'40px'}, flexWrap:'wrap' }}>
          {
            pickCourse.mastermode.map((feature) => {
              return (
                <MasterFeatures number={feature.number} title={feature.title} />
              )
            })
          }
        </Box>
      </Box>
      <Box className="padding-all" sx={{ flexGrow: 1 }}>
        <Box sx={{ maxWidth: '726px', margin: '0 auto 61px' }}>
          <h5 className="center small-tagline">Explore Opportunities</h5>
          <h2 className="center main-heading">Pick a Course. <br />Master a Skill.</h2>
          <p className="center p-primary padding-40">Explore boundless opportunities for personal and professional growth through expert-led courses, tutorials, and mentorship with Pineapple.</p>
          <Box>
            <Grid container spacing={{xs:1,md:4}} sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item xs={12} md={9}>
                <CustomTextField placeholder={'Search courses'} borderRadius={'40px'} bgColor={'#EBEBEC'} paddingLeft={'0px'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <LoadButton text={'More Courses'} />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Grid container spacing={2.5}>
          {
            pickCourse.courses.map((course) => {
              return (
                <PickACourseCards key={course.id} course={course} />
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
    </Box>
  )
}

export default Home