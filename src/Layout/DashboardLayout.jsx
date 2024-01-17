
import React, { useMemo } from 'react'
import Box from '@mui/material/Box';
import DashboardHeader from '../Components/Dashboard/DashboardHeader';
import NavigationBar from '../Components/Dashboard/NavigationBar';

const DashboardLayout = ({ children }) => {
    return (
        <Box>
            <Box display="flex">
                <Box
                    sx={{
                        background: 'var(--dark-purple)',
                        height: "100vh"
                    }}
                >
                    <NavigationBar />
                </Box>
                <Box flex={1} height="100vh" sx={{ overflowY: "scroll" }}>
                    <Box className="top-header">
                        <DashboardHeader />
                    </Box>
                    <Box className="main-content">
                        {children}
                    </Box>
                </Box>
            </Box>
            {/* <Grid container>
                <Grid item xs={12} md={2.3}>
                    <Box sx={{
                        minHeight: '100vh',
                        background: 'var(--dark-purple)'
                    }}
                    >
                        <NavigationBar />
                    </Box>
                </Grid>
                <Grid item xs={12} md={9.7}>
                    <Box sx={{ minHeight: '100vh' }}>
                        <Box className="top-header">
                            <DashboardHeader />
                        </Box>
                        <Box className="main-content">
                            {children}
                        </Box>
                    </Box>
                </Grid>
            </Grid> */}
        </Box>
    )
}

export default DashboardLayout