import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Heart from '../../Assets/heart.svg'
import InfoCircle from '../../Assets/info-circle.svg'
import Typography from '@mui/material/Typography';
import ToolImg from '../../Assets/ToolIcon.svg'


const ToolsCard = () => {
  return (
    <>
     <Grid item xs={12} md={6} lg={4}>
        <Box sx={{
            borderRadius:'16px',
            border:'1px solid var(--stroke-card)',
            background:'#fff',
            position:'relative',
            padding:'12px'
              }}>
            <img className="max-width-100" src={ToolImg} alt="Book Img" />
            <Box sx={{padding:' 7px 0 0 12px'}}>
                <h2 class="card-heading card-heading-inner">CMS Hub</h2>
                <Box sx={{
                    margin:'8px 0 24px',
                    }}>
                    <Typography sx={{
                        color:'var(--purple)',
                        fontWeight:500,
                        fontSize:'16px',
                        lineHeight:'150%',
                        }} variant="body2">Tool</Typography>

                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',}}>
                        <p class="card-description maxwidth-85">
                        With CMS Hub, you'll get a blogging platform that's fully integrated with HubSpot...
                        </p>
                        <Box sx={{position:'absolute',right:'16px',bottom:'11px'}}>
                            <img src={Heart} alt="Heart" />
                            <img className="marginleft-8" src={InfoCircle} alt="Info Circle" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
      </Grid>
    </>
  )
}

export default ToolsCard