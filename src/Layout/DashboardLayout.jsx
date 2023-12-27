
import React, { useMemo } from 'react'
import Logo from '../Assets/Masternization.svg'
import { useLocation, useNavigate } from "react-router-dom"
import LoadButton from '../Components/Common/LoadButton'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CustomMenu from '../Components/Common/CustomMenu';
import Footer from '../Components/Footer/Footer';
import DashboardHeader from '../Components/Dashboard/DashboardHeader';
import NavigationBar from '../Components/Dashboard/NavigationBar';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';

const DashboardLayout = ({ children }) => {
    return (
        <Box >
            <Grid container>
                <Grid sx={{
                    minHeight: '100vh',
                    background: 'var(--dark-purple)'
                }} item xs={12} md={2.3}>
                    <Box className="navigation-bar">
                        <NavigationBar />
                    </Box>
                </Grid>
                <Grid sx={{ minHeight: '100vh' }} item xs={12} md={9.7}>
                    <Box className="top-header">
                        <DashboardHeader />
                    </Box>
                    <Box className="main-content">
                        {children}
                    </Box>
                </Grid>
            </Grid>


        </Box>
    )
}

export default DashboardLayout