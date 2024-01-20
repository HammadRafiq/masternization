import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import AnimationIcon from '../../Assets/courses/animation.svg'

const BloggingJobCard = ({item}) => {
  return (
    <>
    <Grid item xs={12} md={6} lg={4}>
        <Box className="blogging-job-card" sx={{
                borderRadius:'16px',
                border:'1px solid var(--purple)',
                background:'rgba(107, 99, 251, 0.10)',
                padding:'24px 32px 32px'
                }}>
                <Box sx={{display:'flex',gap:'15px'}}>
                    <img src={item.icon?.src} width="50px" height="auto" alt="Animation Icon"/>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <h2 class="card-heading card-heading-inner">{item.title}</h2>
                        <Typography sx={{fontSize:'18px',marginTop:'5px'}} variant="body2">
                       {item.owner}
                        </Typography>
                    </Box>

                </Box>
                <Box sx={{marginTop:'70px'}}>
                    <p class="card-description">{item.desc}</p>
                </Box>
        </Box>
    </Grid>
    </>
  )
}

export default BloggingJobCard