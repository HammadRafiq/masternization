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

const JobCard = () => {
  return (
    <>
    <Grid item  xs={12} md={6} lg={4}>
        <Box sx={{
            borderRadius:'16px',
            background:'#fff',
            position:'relative',
            boxShadow:'0px 1px 7px 0px rgba(0, 0, 0, 0.10)',
            }}>
                <Box className="curved-bg" sx={{padding:'24px 32px 28px'}} >
                    <img src={Ellipse} alt="Ellipse" />
                    <Typography variant='h2' sx={{
                        fontSize:'20px',
                        lineHeight:'140%',
                        letterSpacing:'-0.6px',
                        fontWeight:500,
                        color:'#fff',
                        paddingTop:'16px'
                    }}>
                        How I Built, Ranked & Flipped A 17 Months Old Site For $190K+
                    </Typography>
                </Box>
                <Box sx={{
                    fontSize:'15px',
                    color:'var(--body-text)',
                    fontWeight:500,
                    lineHeight:'160%',
                    padding:'14px 32px 24px'
                }}>
                    Abdul Majeed Siddiqui
                </Box>
        </Box>
    </Grid>
    </>
  )
}

export default JobCard