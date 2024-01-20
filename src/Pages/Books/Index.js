import React, {useContext} from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import LoadButton from '../../Components/Common/LoadButton';
import FormFooter from '../../Components/Common/FormFooter';
import SecondaryHeader from '../../Components/Common/SecondaryHeader';
import BookCard from '../../Components/Books/BookCard';
import { useMutation, gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import SkeltonLoader from '../../Components/Common/SkeltonLoader';
import { GlobalInfo } from '../../App';
import { useParams } from 'react-router-dom'


const GET_BOOKS = gql`
query($masterCourseId: ID, $screen: String){
    contents(masterCourseId: $masterCourseId, screen: $screen) {
      items {
        _id
        icon {
          src
          alt
        }
        title
        owner
        url
        page
        section
      }
      total
    }
  }
`

const Books = () => {

    //const {globalMasterCourseId, setGlobalMasterCourseId} = useContext(GlobalInfo)


    const { masterCourseId } = useParams();

    const { data, loading, error } = useQuery(GET_BOOKS, {
        variables: {
            masterCourseId: masterCourseId,
            screen: "BOOKS"
        }
    })

    //if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log("Fetched Data", data);

    return (
        <>
            <Box className="pl-100 pr-100 pb-100" sx={{ flexGrow: 1 }}>
                <SecondaryHeader title={'Blogging Books'} />
                {
                    loading && <SkeltonLoader />
                }
                <Grid container spacing={2.5}>
                    {
                       data?.contents.items.map((item) => {
                        return(
                            <BookCard id={item._id} book={item} />
                        )
                       })
                    }
                    
                </Grid>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '49px' }}>
                    <LoadButton text={'More Books'} />
                </Box>
            </Box>

            <FormFooter
                title={'Submit a Book'}
                description1={'If you wish to submit a tutorial for potential listing on Masternization, kindly fill the form below.'}
                description2={'(If you are the creator of the tutorial, please submit it using the Creator Dashboard in My Account page)'}
                label1={'Book Name'}
                placeholder1={'Enter the name of the book'}
                label2={'Book URL'}
                placeholder2={'Paste the URL of the book here'}
            />
        </>
    )
}

export default Books