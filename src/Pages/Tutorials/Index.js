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
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import SkeltonLoader from '../../Components/Common/SkeltonLoader';
import { useMutation, gql } from '@apollo/client';

const GET_TUTORIALS = gql`
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

const Tutorials = () => {

  const { masterCourseId } = useParams();

  const { data, loading, error } = useQuery(GET_TUTORIALS, {
    variables: {
      masterCourseId: masterCourseId,
      screen: "TUTORIALS"
    }
  })

  //if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log("Fetched Data", data);

  return (
    <>
      <Box className="pl-100 pr-100 pb-100" sx={{ flexGrow: 1 }}>
        <SecondaryHeader title={'Blogging Tutorials'} />
        {
          loading && <SkeltonLoader />
        }
        <Grid container spacing={2.5}>
         {
          data?.contents.items.map((item) => {
            return(
              <BloggingTutorialsCard key={item._id} item={item} />
            )
          })
         }
        </Grid>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '49px' }}>
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