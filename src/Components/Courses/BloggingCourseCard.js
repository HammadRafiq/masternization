import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';

import DollarCircle from '../../Assets/dollar-circle.svg'
import BloggingIcon from '../../Assets/blogging_course.svg'
import Heart from '../../Assets/heart.svg'
import InfoCircle from '../../Assets/info-circle.svg'

const BloggingCourseCard = ({id,title,instructor,description,imgurl,favorite,info,coursemode,courselink,coursemodecolor}) => {
  return (
    <>
        <Grid item  xs={12} md={6} lg={4}>
            <Box sx={{
                borderRadius:'16px',
                border:'1px solid var(--purple)',
                padding:'24px',
                background:'rgba(107, 99, 251, 0.10);',
                position:'relative'
                }}>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between',
                    }}>
                    <img src={imgurl} alt="Blogging Icon" />
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',background:'#fff',borderRadius:'56px',width:'94px',height:'38px'}}>
                        <img src={coursemode} alt="Dollar Circle" />
                        <Typography variant="body2" sx={{
                            color:coursemodecolor,
                            fontSize:'16px',
                            fontWeight:500,
                            lineHeight:'16px',
                            marginLeft:'4px'
                        }}>FREE</Typography>
                    </Box>
                </Box>
                <h2 class="card-heading card-heading-inner">{title}</h2>
                <Typography sx={{
                    color:'var(--purple)',
                    fontWeight:500,
                    fontSize:'16px',
                    lineHeight:'150%',
                    margin:'8px 0 16px'
                }} variant="body2">{instructor}</Typography>
                <p class="card-description maxwidth-85">{description}</p>
                <Box sx={{position:'absolute',right:'16px',bottom:'11px'}}>
                    <img src={favorite} alt="Heart" />
                    <img className="marginleft-8" src={info} alt="Info Circle" />
                </Box>
            </Box>
        </Grid>
    </>
  )
}

export default BloggingCourseCard