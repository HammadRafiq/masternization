import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import StatsCard from '../../../Components/Dashboard/Common/StatsCard';
import { useForm, Controller } from 'react-hook-form';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';


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

export default Creators;