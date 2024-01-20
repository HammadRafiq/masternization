import React from 'react'
import { useState } from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import IconImg from '../../Assets/icon_skill.png'
import { ReactComponent as HeartIcon } from '../../Assets/courses/heart.svg'
import Arrow from '../../Assets/Arrow.svg'
import { Link } from 'react-router-dom';


const PickACourseCards = ({ key, item }) => {
  const [heart, setHeart] = useState("inactive")
  const masterCourseId = item._id;

  const linkStyles = {
    textDecoration: 'none', // Set text decoration to none
    color: 'inherit', // Inherit the color from the parent
  };

  return (
    <Grid id={key} item xs={12} md={6} lg={4}>
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
          <img class="box-img" src={item.icon?.src} />

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
        <h2 className="card-heading">{item.name}</h2>
        <p className="card-description">{item.desc}</p>
        <Link style={linkStyles} to={`/master-blogging/${masterCourseId}`}>
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
        </Link>
      </Box>
    </Grid>
  )
}

export default PickACourseCards