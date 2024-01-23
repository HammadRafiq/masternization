import React, { useState } from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Heart from '../../Assets/heart.svg'
import InfoCircle from '../../Assets/info-circle.svg'
import YoutubeChannelLinkIcon from '../../Assets/youtube_channel_link_icon.svg'
import { isAuthenticated, setAdmin, setSession } from '../../Helpers/Utils'
import LoginPrompt from '../../Components/Common/LoginPrompt'
import { Link } from 'react-router-dom';
import { Dialog, Button } from '@mui/material';
import DefaultImg from "../../Assets/default/youtube.jpg"


const YoutubeChannelCard = ({ item }) => {
  const isLoggedIn = isAuthenticated()

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleLinkClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault(); // Prevent the default behavior (opening the link in a new tab)
      setPopupOpen(true);
    }
    // If user is logged in, the link will open as usual
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };


  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <Box sx={{
          borderRadius: '16px',
          border: '1px solid var(--stroke-card)',
          background: '#fff',
          position: 'relative',
          padding: '12px 12px 24px',
          height: "calc(100% - 30px)"
        }}>
          <img className="card-img-primary" src={item.icon?.src ?? DefaultImg} alt={item.icon?.alt} />
          <Box sx={{ padding: '7px 20px 0' }}>
            <h2 class="card-heading card-heading-inner">{item.title}</h2>
            <p class="card-description youtube-course-descripton">
              {item.desc}
            </p>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '38px' }}>
              <Box >
                <img src={Heart} alt="Heart" />
                <img className="marginleft-8" src={InfoCircle} alt="Info Circle" />
              </Box>


              <Box>
                <Link
                  to={isLoggedIn ? item.url : '/your-actual-link'}
                  onClick={handleLinkClick}
                  href={isLoggedIn ? item.url : undefined}
                  target="_blank"
                >
                  <img src={YoutubeChannelLinkIcon} alt="Book Link" />
                </Link>

                {!isLoggedIn && (
                  <Dialog open={isPopupOpen} onClose={handleClosePopup}>
                    <LoginPrompt />
                    <Button onClick={handleClosePopup}>Close</Button>
                  </Dialog>
                )}
              </Box>


            </Box>
          </Box>

        </Box>
      </Grid>
    </>
  )
}

export default YoutubeChannelCard

{
  /**
   * 
   *   <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img src={YoutubeChannelLinkIcon} alt="Book Link" />
              </a>
   */
}