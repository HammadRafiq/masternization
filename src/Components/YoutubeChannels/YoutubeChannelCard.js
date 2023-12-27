import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import LoadButton from '../../Components/Common/LoadButton';
import CustomTextField from '../../Components/Common/CustomTextField';
import FormFooter from '../../Components/Common/FormFooter';
import Heart from '../../Assets/heart.svg'
import InfoCircle from '../../Assets/info-circle.svg'
import SecondaryHeader from '../../Components/Common/SecondaryHeader';
import BookImg from '../../Assets/book_icon.svg'
import Typography from '@mui/material/Typography';
import BookLinkIcon from '../../Assets/book_link_icon.svg'
import Youtubechannelimg from '../../Assets/youtube_channel_icon.svg'
import YoutubeChannelLinkIcon from '../../Assets/youtube_channel_link_icon.svg'

const YoutubeChannelCard = () => {
  return (
    <>
    <Grid item xs={12} md={6} lg={4}>
        <Box sx={{
            borderRadius:'16px',
            border:'1px solid var(--stroke-card)',
            background:'#fff',
            position:'relative',
            padding:'12px 12px 24px'
            }}>
            <img className="max-width-100" src={Youtubechannelimg} alt="Book Img" />
           <Box sx={{padding:'7px 20px 0'}}>
                <h2 class="card-heading card-heading-inner">Niche Pursuits</h2>
                <p class="card-description youtube-course-descripton">
                The NichePursuits YouTube channel contains a ton of useful blogging related content.
                </p>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:'38px'}}> 
                    <Box >
                        <img src={Heart} alt="Heart" />
                        <img className="marginleft-8" src={InfoCircle} alt="Info Circle" />
                    </Box>
                    <img src={YoutubeChannelLinkIcon} alt="Book Link" />
                </Box>    
           </Box>
           
        </Box>
    </Grid>
    </>
  )
}

export default YoutubeChannelCard