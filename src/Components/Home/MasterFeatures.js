import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
const MasterFeatures = ({number,title}) => {
  return (
    <Box className="master-features-box" sx={{textAlign:'center',width:{xs:'50%',md:'auto'},marginBottom:{xs:'25px',md:'0'}}}>
          <Typography variant="h5" sx={{
            color:'var(--purple)',
            fontSize:'36px',
            fontWeight:400,
            letterSpacing:'-1.08px;'
          }}>
            {number}
          </Typography>
          <Typography variant="h6" sx={{
            color:'var(--body-text',
            fontSize:'20px !important',
            fontWeight:'700 !important',
            letterSpacing:'-0.6px',
          }}>
          {title}
          </Typography>
        </Box>
  )
}

export default MasterFeatures