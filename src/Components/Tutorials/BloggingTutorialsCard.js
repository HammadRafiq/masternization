import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import DollarCircle from '../../Assets/dollar-circle.svg'
import Heart from '../../Assets/heart.svg'
import InfoCircle from '../../Assets/info-circle.svg'
import NoteBookIcon from '../../Assets/notebook_icon.svg'
import Typography from '@mui/material/Typography';


const BloggingTutorialsCard = () => {
  return (
    <>
    <Grid item  xs={12} md={6} lg={4}>
            <Box sx={{
                borderRadius:'16px',
                border:'1px solid var(--stroke-card)',
                background:'#fff',
                position:'relative'
                }}>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between',
                    background:'var(--purple)',
                    padding:'24px',
                    borderRadius:'16px 16px 0 0'
                    }}>
                    <img src={NoteBookIcon} alt="Blogging Icon" />
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',background:'#fff',borderRadius:'56px',width:'94px',height:'38px'}}>
                        <img src={DollarCircle} alt="Dollar Circle" />
                        <Typography variant="body2" sx={{
                            color:'var(--purple)',
                            fontSize:'16px',
                            fontWeight:500,
                            lineHeight:'16px',
                            marginLeft:'4px'
                        }}>FREE</Typography>
                    </Box>
                </Box>
                <Box sx={{padding:'7px 24px 24px'}}>
                    <h2 class="card-heading card-heading-inner">Project 24</h2>
                    <Typography sx={{
                        color:'var(--purple)',
                        fontWeight:500,
                        fontSize:'16px',
                        lineHeight:'150%',
                        margin:'8px 0 16px'
                    }} variant="body2">Income School</Typography>
                    <p class="card-description maxwidth-85">
                    Many people were hoping that if the Democrats won control of Congress they would reverse the online
                    </p>
                    <Box sx={{position:'absolute',right:'16px',bottom:'11px'}}>
                        <img src={Heart} alt="Heart" />
                        <img className="marginleft-8" src={InfoCircle} alt="Info Circle" />
                    </Box>
                </Box>
            </Box>
    </Grid>
    </>
  )
}

export default BloggingTutorialsCard