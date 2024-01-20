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
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { useMutation, gql } from '@apollo/client';
import SkeltonLoader from '../../Components/Common/SkeltonLoader';

const GET_JOBS = gql`
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


const BloggingJobs = () => {

    const { masterCourseId } = useParams();

    const { data, loading, error } = useQuery(GET_JOBS, {
        variables: {
            masterCourseId: masterCourseId,
            screen: "JOBS"
        }
    })

    //if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log("Fetched Data", data);

    return (
        <>
            <Box className="pl-100 pr-100 pb-100" sx={{ flexGrow: 1 }}>
                <SecondaryHeader title={'Blogging Jobs'} />
                {
                    loading && <SkeltonLoader />
                }
                <Grid container spacing={2.5}>

                    {
                        data?.contents.items.map((item) => {
                            return(
                                <JobCard key={item._id} item={item} />
                            )
                        })
                    }

                </Grid>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '49px' }}>
                    <LoadButton text={'More Jobs'} />
                </Box>
            </Box>

            <FormFooter
                title={'List a Job'}
                description1={'If you wish to submit a job for potential listing on Masternization, kindly fill the form below.'}
                description2={''}
                label1={'Job Name'}
                placeholder1={'Enter the name of the job'}
                label2={'Job URL'}
                placeholder2={'Paste the URL of the job here'}
            />
        </>
    )
}

export default BloggingJobs