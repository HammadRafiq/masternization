import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Skeleton from '@mui/material/Skeleton';

const SkeltonLoader = () => {
    return (

        <Grid container spacing={2.5}>
            <Grid item xs={12} md={4} >
                <Box sx={{  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                        <Box sx={{ width: '100%', marginLeft: 1 }}>
                            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6, }} />
                            <Skeleton animation="wave" height={10} width="40%" />
                        </Box>
                    </Box>
                    <Skeleton sx={{ height: 190, marginTop: 2, marginBottom: 2 }} animation="wave" variant="rectangular" />
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                </Box>
            </Grid>
            <Grid item xs={12} md={4} >
                <Box sx={{  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                        <Box sx={{ width: '100%', marginLeft: 1 }}>
                            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6, }} />
                            <Skeleton animation="wave" height={10} width="40%" />
                        </Box>
                    </Box>
                    <Skeleton sx={{ height: 190, marginTop: 2, marginBottom: 2 }} animation="wave" variant="rectangular" />
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                </Box>
            </Grid>
            <Grid item xs={12} md={4} >
                <Box sx={{  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                        <Box sx={{ width: '100%', marginLeft: 1 }}>
                            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6, }} />
                            <Skeleton animation="wave" height={10} width="40%" />
                        </Box>
                    </Box>
                    <Skeleton sx={{ height: 190, marginTop: 2, marginBottom: 2 }} animation="wave" variant="rectangular" />
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                </Box>
            </Grid>

        </Grid>
    )
}

export default SkeltonLoader