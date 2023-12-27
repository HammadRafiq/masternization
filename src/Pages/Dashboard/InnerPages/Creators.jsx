import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StatsCard from '../../../Components/Dashboard/Common/StatsCard';

const Creators = () => {
  return (
    <>
      <Box sx={{ padding: '40px' }}>
        <Grid container spacing={2.5}>
          <StatsCard numbers={'1,762'} title={'Creators'} increment={'-21% than last week'} />
        </Grid>
      </Box>
    </>
  )
}

export default Creators