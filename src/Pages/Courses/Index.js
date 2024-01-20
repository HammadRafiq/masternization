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
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { useMutation, gql } from '@apollo/client';
import SkeltonLoader from '../../Components/Common/SkeltonLoader';

const GET_COURSES = gql`
query($masterCourseId: ID, $screen: String){
    contents(masterCourseId: $masterCourseId, screen: $screen) {
      items {
        _id
        icon {
          src
          alt
        }
        title
        availability
        owner
        desc
        url
        page
        section
      }
      total
    }
  }
`

const Courses = () => {

  const { masterCourseId } = useParams();

  const { data, loading, error } = useQuery(GET_COURSES, {
    variables: {
      masterCourseId: masterCourseId,
      screen: "COURSES"
    }
  })

  //if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log("Fetched Data", data);

  return (
    <>
      <Box className="pl-100 pr-100 pb-100" sx={{ flexGrow: 1 }}>
        <SecondaryHeader title={'Blogging Courses'} />
        {
          loading && <SkeltonLoader />
        }
        <Grid container spacing={2.5}>
          {
            data?.contents.items.map((item) => {
              return(
                <BloggingCourseCard key={item._id} item={item} />
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