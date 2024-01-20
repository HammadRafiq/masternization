import React, { useContext } from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import FormFooter from '../../Components/Common/FormFooter';
import JobCard from '../../Components/Jobs/JobCard';
import StartBloggingCard from '../../Components/MasterBlogging/StartBloggingCard';
import BloggingJobCard from '../../Components/MasterBlogging/BloggingJobCard';
import BloggingBusinessCard from '../../Components/MasterBlogging/BloggingBusinessCard';
import LoadButton from '../../Components/Common/LoadButton';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import SkeltonLoader from '../../Components/Common/SkeltonLoader';
import { useMutation, gql } from '@apollo/client';
import { GlobalInfo } from '../../App';

const GET_SUCCESS_STORIES = gql`
query($masterCourseId: ID, $screen: String, $section: String){
    contents(masterCourseId: $masterCourseId, screen: $screen, section: $section) {
      items {
        _id
        owner
        icon {
          src
          alt
        }
        title
        desc
        url
        page
        section
      }
      total
    }
  }
`

const MasterBlogging = () => {

    const { globalMasterCourseId, setGlobalMasterCourseId } = useContext(GlobalInfo)

    const { masterCourseId } = useParams();

    const { data: data1, loading: loading1, error: error1 } = useQuery(GET_SUCCESS_STORIES, {
        variables: {
            masterCourseId: masterCourseId,
            screen: "DASHBOARD",
            section: "SUCCESS_STORIES"
        }
    })

    const { data: data2, loading: loading2, error: error2 } = useQuery(GET_SUCCESS_STORIES, {
        variables: {
            masterCourseId: masterCourseId,
            screen: "DASHBOARD",
            section: "HOW_TO_START"
        }
    })

    const { data: data3, loading: loading3, error: error3 } = useQuery(GET_SUCCESS_STORIES, {
        variables: {
            masterCourseId: masterCourseId,
            screen: "DASHBOARD",
            section: "HOW_TO_GET_JOB"
        }
    })

    const { data: data4, loading: loading4, error: error4 } = useQuery(GET_SUCCESS_STORIES, {
        variables: {
            masterCourseId: masterCourseId,
            screen: "DASHBOARD",
            section: "HOW_TO_START_BUSINESS"
        }
    })

    if (error4) return <p>Error: {error4.message}</p>;
    console.log("Fetched Data", data4);

    return (
        <>

            <Box className="pl-100 pr-100 pb-100" sx={{ flexGrow: 1 }}>
                <Box sx={{ display: { xs: 'block', md: 'flex' }, textAlign: 'center', justifyContent: 'center', gap: '12px', margin: '100px 0 32px' }}>
                    <LoadButton text={'Master Blogging'} styleProps={{ fontSize: '16px', fontFamily: 'DM Sans !important', fontWeight: 400, letterSpacing: '-0.48px', height: '44px', minWidth: '160px' }} />
                    <LoadButton text={'Become a Blogger'} styleProps={{ background: 'var(--dark-purple)', fontSize: '16px', fontFamily: 'DM Sans !important', fontWeight: 400, letterSpacing: '-0.48px', height: '44px', minWidth: '160px' }} />
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
                {
                    loading1 && <SkeltonLoader />
                }
                <Grid container spacing={2.5}>

                    {
                        data1?.contents.items.map((item) => {
                            return (
                                <>
                                    <JobCard item={item} />
                                </>
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
                    {
                        loading2 && <SkeltonLoader />
                    }
                    <Grid container spacing={2.5}>
                        {
                            data2?.contents.items.map((item) => {
                                return (
                                    <StartBloggingCard item={item} />
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
                {
                    loading3 && <SkeltonLoader />
                }
                <Grid container spacing={2.5}>
                    {
                        data3?.contents.items.map((item) => {
                            return (
                                <BloggingJobCard item={item} />
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
                    {
                        loading4 && <SkeltonLoader />
                    }
                    <Grid container spacing={2.5}>
                        {
                            data4?.contents.items.map((item) => {
                                return (
                                    <BloggingBusinessCard item={item} />
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