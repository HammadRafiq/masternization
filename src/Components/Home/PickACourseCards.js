import React from 'react'
import { useState } from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import IconImg from '../../Assets/icon_skill.png'
import { ReactComponent as HeartIcon } from '../../Assets/courses/heart.svg'
import Arrow from '../../Assets/Arrow.svg'


const PickACourseCards = ({ course }) => {
  const [heart, setHeart] = useState("inactive")

  return (
    <Grid item xs={4} md={6} lg={4}>
      <Box sx={{
        borderRadius: '16px',
        border: '1px solid rgba(38, 38, 38, 0.10)',
        padding: '24px',
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
        }}>
          {/* <img class="box-img" src={IconImg} /> */}
          {<course.imageURL />}
          <HeartIcon
            style={{ cursor: "pointer" }}
            className={`heart-icon ${heart}`}
            onClick={() => {
              if (heart == "inactive") {
                setHeart("active")
              }
              else {
                setHeart("inactive")
              }
            }}
          />
        </Box>
        <h2 class="card-heading">{course.title}</h2>
        <p class="card-description">Master the art of web development with our expert-led courses.</p>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: '24px',
          cursor: "pointer",
          marginRight: "10px",
          transition: "all 0.3s ease-out",
          "&:hover": {
            marginRight: 0
          }
        }}>
          <h6>Go to course</h6>
          <img src={Arrow} alt="arrow" />
        </Box>
      </Box>
    </Grid>
  )
}

export default PickACourseCards