import React, { useContext, useEffect, useState } from 'react'
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
import { useNavigate } from 'react-router-dom';
import Pagination from 'rc-pagination';
import CustomPagination from '../../Components/Common/CustomPagination';
import Typography from '@mui/material/Typography';
import { limit } from '../../Helpers/Utils';

const GET_SUCCESS_STORIES = gql`
query($masterCourseId: ID, $screen: String, $section: String, $page: Int, $limit: Int, $status: Boolean){
    contents(masterCourseId: $masterCourseId, screen: $screen, section: $section, page: $page, limit: $limit, status: $status) {
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

    //const [limit, setLimit] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);
    const [currentPage3, setCurrentPage3] = useState(1);
    const [currentPage4, setCurrentPage4] = useState(1);

    const { masterCourseId } = useParams();

    const navigate = useNavigate();

    const selectedMastercourseId = localStorage.getItem('selectedMasterCourseId');
    console.log("Fetched ID", selectedMastercourseId);

    useEffect(() => {
        const currentPath = window.location.pathname;
        const sectionElement = document.getElementById('master-dashboard');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        if (currentPath.endsWith('/undefined')) {

            const updatedPath = currentPath.replace('/undefined', `/${selectedMastercourseId}`);
            navigate(updatedPath, { replace: true });
        }
    }, [navigate]);



    /* SUCCESS STORIES API Fetching */

    const { data: data1, loading: loading1, error: error1, fetchMore } = useQuery(GET_SUCCESS_STORIES, {
        variables: {
            masterCourseId: masterCourseId,
            screen: "DASHBOARD",
            section: "SUCCESS_STORIES",
            page: currentPage,
            limit: limit
        }
    })

    const handlePageChange1 = (page) => {
        setCurrentPage(page);
        fetchMore({
            variables: { page: currentPage, limit: limit },
        });
    };



    /* How To START API Fetching */

    const { data: data2, loading: loading2, error: error2, fetchMore: fetchMore2 } = useQuery(GET_SUCCESS_STORIES, {
        variables: {
            masterCourseId: masterCourseId,
            screen: "DASHBOARD",
            section: "HOW_TO_START",
            page: currentPage2,
            limit: limit

        }
    })

    const handlePageChange2 = (page) => {
        setCurrentPage2(page);
        fetchMore2({
            variables: { page: currentPage2, limit: limit },
        });
    };




    /* How To GET JOB SECTION */

    const { data: data3, loading: loading3, error: error3, fetchMore: fetchMore3 } = useQuery(GET_SUCCESS_STORIES, {
        variables: {
            masterCourseId: masterCourseId,
            screen: "DASHBOARD",
            section: "HOW_TO_GET_JOB",
            page: currentPage3,
            limit: limit
        }
    });

    const handlePageChange3 = (page) => {
        setCurrentPage3(page);
        fetchMore3({
            variables: { page: currentPage3, limit: limit },
        });
    };

    /** How to Start Business Section */

    const { data: data4, loading: loading4, error: error4, fetchMore: fetchMore4 } = useQuery(GET_SUCCESS_STORIES, {
        variables: {
            masterCourseId: masterCourseId,
            screen: "DASHBOARD",
            section: "HOW_TO_START_BUSINESS",
            page: currentPage4,
            limit: limit
        }
    });

    const handlePageChange4 = (page) => {
        setCurrentPage4(page);
        fetchMore4({
            variables: { page: currentPage4, limit: limit },
        });
    };
    const masterCourseName = localStorage.getItem("selectedMasterCourseName")
    const allCoursesDisplayed1 = data1?.contents.items.length >= data1?.contents.total && data1?.contents.items.length !== 0;
    const allCoursesDisplayed2 = data2?.contents.items.length >= data2?.contents.total && data2?.contents.items.length !== 0;
    const allCoursesDisplayed3 = data3?.contents.items.length >= data3?.contents.total && data3?.contents.items.length !== 0;
    const allCoursesDisplayed4 = data4?.contents.items.length >= data4?.contents.total && data4?.contents.items.length !== 0;


    return (
        <>
            <Box id="master-dashboard" className="master-dashboard pl-100 pr-100 pb-100" sx={{ flexGrow: 1 }}>
                <Box sx={{ display: { xs: 'block', md: 'flex' }, textAlign: 'center', justifyContent: 'center', gap: '12px', margin: '100px 0 32px' }}>
                    <LoadButton text={masterCourseName} styleProps={{ fontSize: '16px', fontFamily: 'DM Sans !important', fontWeight: 400, letterSpacing: '-0.48px', height: '44px', minWidth: '160px' }} />
                    <LoadButton text={`Become a ${masterCourseName}`} styleProps={{ background: 'var(--dark-purple)', fontSize: '16px', fontFamily: 'DM Sans !important', fontWeight: 400, letterSpacing: '-0.48px', height: '44px', minWidth: '160px' }} />
                </Box>
                <Box>
                    <h2 className="center main-heading">{masterCourseName}</h2>
                </Box>
                <Box className="center" sx={{ margin: '100px 0 84px' }}>
                    <h3 className="mb-16">Introduction</h3>
                    <p className="p-primary">
                        Blogging is a way of creating and sharing content on the internet to connect with an audience. It involves regularly writing and publishing articles, called blog posts, on a website. These posts can cover various topics, such as personal interests, expertise, or products and services related to your business.
                    </p>
                </Box>
                <Box sx={{ textAlign: 'center', marginBottom: '42px' }}>
                    <h5 className="small-tagline letting-spacing-6 mb-12">Get Inspired</h5>
                    <h3 className="mb-16">{masterCourseName} Success Stories</h3>
                    <p className="p-primary">
                        Blogging is a way of creating and sharing content on the internet to connect with an audience.
                    </p>
                </Box>
                {
                    loading1 && <SkeltonLoader />
                }
                <Grid container spacing={2.5}>

                    {
                        data1?.contents.items.length === 0 ? (
                            <Typography variant="body2" sx={{
                                width: '100%', textAlign: 'center', fontSize: '16px', fontWeight: 500, marginTop: '12px'
                            }}>No data found.</Typography>
                        )
                            :
                            (data1?.contents.items.map((item) => {
                                return (
                                    <JobCard item={item} />
                                )
                            }))
                    }

                </Grid>

                <Box sx={{ marginTop: '50px' }}>
                    <CustomPagination total={data1?.contents.total} onChange={handlePageChange1} />
                </Box>

                <Box>
                    <Box sx={{ textAlign: 'center', marginTop: '100px', marginBottom: '42px' }}>
                        <h5 className="small-tagline letting-spacing-6 mb-12">Explore</h5>
                        <h3 className="mb-16">How To Start {masterCourseName}</h3>
                        <p className="p-primary">
                            Blogging is a way of creating and sharing content on the internet to connect with an audience.
                        </p>
                    </Box>
                    {
                        loading2 && <SkeltonLoader />
                    }
                    <Grid container spacing={2.5}>
                        {
                            data2?.contents.items.length === 0 ? (
                                <Typography variant="body2" sx={{
                                    width: '100%', textAlign: 'center', fontSize: '16px', fontWeight: 500, marginTop: '12px'
                                }}>No data found.</Typography>
                            )
                                :
                                (data2?.contents.items.map((item) => {
                                    return (
                                        <StartBloggingCard item={item} />
                                    )
                                }))
                        }
                    </Grid>

                    <Box sx={{ marginTop: '50px' }}>
                        <CustomPagination total={data2?.contents.total} onChange={handlePageChange2} />
                    </Box>

                </Box>
                <Box sx={{ textAlign: 'center', marginTop: '100px', marginBottom: '42px' }}>
                    <h5 className="small-tagline letting-spacing-6 mb-12">Find jobs</h5>
                    <h3 className="mb-16">How To Get A {masterCourseName} Job</h3>
                    <p className="p-primary">
                        Blogging is a way of creating and sharing content on the internet to connect with an audience.
                    </p>
                </Box>
                {
                    loading3 && <SkeltonLoader />
                }
                <Grid container spacing={2.5}>
                    {
                        data3?.contents.items.length === 0 ? (
                            <Typography variant="body2" sx={{
                                width: '100%', textAlign: 'center', fontSize: '16px', fontWeight: 500, marginTop: '12px'
                            }}>No data found.</Typography>
                        )
                            :
                            (data3?.contents.items.map((item) => {
                                return (
                                    <BloggingJobCard item={item} />
                                )
                            }))
                    }
                </Grid>
                <Box sx={{ marginTop: '50px' }}>
                    <CustomPagination total={data3?.contents.total} onChange={handlePageChange3} />
                </Box>
                <Box>
                    <Box sx={{ textAlign: 'center', marginTop: '100px', marginBottom: '42px' }}>
                        <h5 className="small-tagline letting-spacing-6 mb-12">Be independent</h5>
                        <h3 className="mb-16">How To Start A {masterCourseName} Business</h3>
                        <p className="p-primary">
                            Blogging is a way of creating and sharing content on the internet to connect with an audience.
                        </p>
                    </Box>
                    {
                        loading4 && <SkeltonLoader />
                    }
                    <Grid container spacing={2.5}>
                        {
                            data4?.contents.items.length === 0 ? (
                                <Typography variant="body2" sx={{
                                    width: '100%', textAlign: 'center', fontSize: '16px', fontWeight: 500, marginTop: '12px'
                                }}>No data found.</Typography>
                            )
                                :
                                (data4?.contents.items.map((item) => {
                                    return (
                                        <BloggingBusinessCard item={item} />
                                    )
                                }))
                        }
                    </Grid>
                    <Box sx={{ marginTop: '50px' }}>
                        <CustomPagination total={data4?.contents.total} onChange={handlePageChange4} />
                    </Box>
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