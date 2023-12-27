import React from 'react'
import DashboardLayout from '../../Layout/DashboardLayout'
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import StatsCard from '../../Components/Dashboard/Common/StatsCard';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Box sx={{ padding: '40px' }}>
        <Grid container spacing={2.5}>
          <StatsCard numbers={'1,762'} title={'Users'} increment={'-21% than last week'} />
          <StatsCard numbers={'1,762'} title={'Creators'} increment={'-21% than last week'} />
          <StatsCard numbers={'1,762'} title={'Offers'} increment={'-21% than last week'} />
          <StatsCard numbers={'1,762'} title={'Featured'} increment={'-21% than last week'} />
        </Grid>
      </Box>
    </DashboardLayout>
  )
}

export default Dashboard