import React, { useState } from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import PickACourseCards from '../../Components/Home/PickACourseCards';
import LoadButton from '../../Components/Common/LoadButton';
import MasterFeatures from '../../Components/Home/MasterFeatures';
import Typography from '@mui/material/Typography';
import CustomTextField from '../../Components/Common/CustomTextField';
import FormFooter from '../../Components/Common/FormFooter';
import Pagination from 'rc-pagination';
import BannerBg from "../../Assets/banner-bg.png"
import { useForm } from 'react-hook-form';
import { useMutation, gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import SkeltonLoader from '../../Components/Common/SkeltonLoader';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const GET_MASTERCOURSES = gql`
  query($limit: Int, $page: Int){
  masterCourses(limit: $limit, page: $page) {
    total
    items {
      _id
      desc
      name
      icon {
        alt
        src
      }
    }
  }
}
`

const pickCourse = {
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


  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data', data);
  };

  const [loading1, setLoading1] = useState(false);
  const [limit, setLimit] = useState(1);
  const [page, setPage] = useState(2)
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error, fetchMore } = useQuery(GET_MASTERCOURSES, {
    variables: {
      page: 1,
      limit: 3
    }
  });

  const handleLoadMore = () => {

    setPage(prev => prev + 1);
    setLoading1(true);
    fetchMore({
      variables: {
        page: page,
        limit: 3
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;
        setLoading1(false);
        return {
          masterCourses: {
            total: fetchMoreResult.masterCourses.total,
            limit: fetchMoreResult.masterCourses.limit,
            page: fetchMoreResult.masterCourses.page,
            items: [...prevResult.masterCourses.items, ...fetchMoreResult.masterCourses.items],
          },
        };

      },
    });
  };

  if (error) return <p>Error: {error.message}</p>;

  const handleButtonClick = () => {

    const sectionElement = document.getElementById('explore-all-courses');

    sectionElement.scrollIntoView({ behavior: 'smooth' });

  };

  const allCoursesDisplayed = data?.masterCourses.items.length >= data?.masterCourses.total;

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
              fontSize: { xs: '16px', md: '24px' },
              lineHeight: { xs: '26px', md: '35px' },
              margin: '30px 0 25px'
            }}>
              We give you all you need to become an expert in your field, whether you are starting from scratch or not - courses, tutorials, books, tools and much more.
            </Typography>
            <Button sx={{
              backgroundColor: 'var(--purple)',
              color: 'var(--white)',
              textTransform: 'capitalize',
              borderRadius: '76px',
              padding: '10px 28px',
              fontSize: '18px',
              fontWeight: 500,
              height: '60px',
              marginTop: {
                xs: '15px',
                md: '0'
              },
              minWidth: {
                xs: '100%',
                md: '201px'
              },
              '&:hover': {
                backgroundColor: 'var(--purple)',
              },

            }} onClick={handleButtonClick}>
              Start Your Journey
            </Button>

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
        <Box sx={{ display: 'flex', alignItems: { xs: 'start', md: 'center' }, justifyContent: 'space-between', marginTop: { xs: '30px', md: '40px' }, flexWrap: 'wrap' }}>
          {
            pickCourse.mastermode.map((feature) => {
              return (
                <MasterFeatures number={feature.number} title={feature.title} />
              )
            })
          }
        </Box>
      </Box>
      <Box id="explore-all-courses" className="padding-all" sx={{ flexGrow: 1 }}>
        <Box sx={{ maxWidth: '726px', margin: '0 auto 61px' }}>
          <h5 className="center small-tagline">Explore Opportunities</h5>
          <h2 className="center main-heading">Pick a Course. <br />Master a Skill.</h2>
          <p className="center p-primary padding-40">Explore boundless opportunities for personal and professional growth through expert-led courses, tutorials, and mentorship with Pineapple.</p>
          <Box sx={{ position: 'relative' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={{ xs: 1, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} md={9}>
                  <CustomTextField
                    name={'searchcourses'}
                    label=""
                    placeholder={'Search courses'}
                    borderRadius={'40px'}
                    bgColor={'#EBEBEC'}
                    paddingLeft={'15px'}
                    register={register}
                    required={true}
                    errors={errors}
                    styles={{ position: 'absolute', top: '0px', left: { xs: '25px', md: '30px' } }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <LoadButton text={'Search'} />
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
        {
          loading && <SkeltonLoader />
        }

        <Grid container spacing={2.5}>
          {
            data?.masterCourses.items.map((item) => {
              return (
                <>
                  <PickACourseCards key={item._id} item={item} />
                </>
              )
            })
          }
        </Grid>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '49px' }}>

          <LoadButton onClick={handleLoadMore} text={'More Courses'} disabled={allCoursesDisplayed || loading || loading1} loading={loading1} />

        </Box>
        {/* Message when all courses are displayed */}
        {allCoursesDisplayed && <Typography variant="body2" sx={{
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 500,
          marginTop: '12px'

        }}>All courses have been displayed.</Typography>}
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