import React, { useState, useEffect } from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import LoadButton from '../../Components/Common/LoadButton';
import FormFooter from '../../Components/Common/FormFooter';
import BloggingCourseCard from '../../Components/Courses/BloggingCourseCard';
import SecondaryHeader from '../../Components/Common/SecondaryHeader';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import SkeltonLoader from '../../Components/Common/SkeltonLoader';
import Typography from '@mui/material/Typography';
import { limit } from '../../Helpers/Utils';

const GET_COURSES = gql`
query($masterCourseId: ID, $screen: String, $limit: Int, $page: Int, $status: Boolean){
    contents(masterCourseId: $masterCourseId, screen: $screen, limit: $limit, page: $page, status: $status) {
      items {
        _id
        icon {
          src
          alt
        }
        title
        status
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

  const [loading1, setLoading1] = useState(false);
  //const [limit, setLimit] = useState(1);
  const [page, setPage] = useState(2)
  const [currentPage, setCurrentPage] = useState(1);

  const { masterCourseId } = useParams();

  const navigate = useNavigate();

  const selectedMastercourseId = localStorage.getItem('selectedMasterCourseId');

  useEffect(() => {

    const currentPath = window.location.pathname;

    if (currentPath.endsWith('/undefined')) {

      const updatedPath = currentPath.replace('/undefined', `/${selectedMastercourseId}`);
      navigate(updatedPath, { replace: true });
    }
  }, [navigate]);

  const { data, loading, error, fetchMore } = useQuery(GET_COURSES, {
    variables: {
      masterCourseId: masterCourseId,
      screen: "COURSES",
      page: 1,
      limit: limit,
      status: true
    }
  });

  const handleLoadMore = () => {

    setPage(prev => prev + 1);
    setLoading1(true);
    fetchMore({
      variables: {
        page: page,
        limit: limit,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;
        setLoading1(false);
        return {
          contents: {
            total: fetchMoreResult.contents.total,
            limit: fetchMoreResult.contents.limit,
            page: fetchMoreResult.contents.page,
            items: [...prevResult.contents.items, ...fetchMoreResult.contents.items],
          },
        };
      },
    });
  };

  //if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log("Fetched Data", data);

  const allCoursesDisplayed = data?.contents.items.length >= data?.contents.total && data?.contents.items.length !== 0;

  return (
    <>
      <Box className="pl-100 pr-100 pb-100" sx={{ flexGrow: 1 }}>
        <SecondaryHeader title={'Blogging Courses'} />
        {
          loading && <SkeltonLoader />
        }
        <Grid container spacing={2.5}>
          {
            data?.contents.items.length === 0 ? (
              <Typography variant="body2" sx={{
                width: '100%', textAlign: 'center', fontSize: '16px', fontWeight: 500, marginTop: '12px'
              }}>No data found.</Typography>
            )
              :
              (data?.contents.items.map((item) => {
                return (
                  <BloggingCourseCard key={item._id} item={item} />
                )
              }))
          }
        </Grid>
        {
          data?.contents.items.length !== 0 && !allCoursesDisplayed && (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '49px' }}>
              <LoadButton onClick={handleLoadMore} text={'More Courses'} disabled={allCoursesDisplayed || loading || loading1} loading={loading1} />
            </Box>
          )
        }
        {/* Message when all courses are displayed */}
        {allCoursesDisplayed && <Typography variant="body2" sx={{
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 500,
          marginTop: '30px'
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

    </>
  )
}

export default Courses