import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import DefaultImg from "../../Assets/default/jobs.svg"

const JobCard = ({ item }) => {
    return (
        <>
            <Grid item xs={12} md={6} lg={4}>
                <Box sx={{
                    borderRadius: '16px',
                    background: '#fff',
                    position: 'relative',
                    boxShadow: '0px 1px 7px 0px rgba(0, 0, 0, 0.10)',
                    height: "calc(100% - 30px)"
                }}>
                    <Box className="curved-bg" sx={{ padding: '24px 32px 28px' }} >
                        <img src={item.icon.src} alt={item.icon.alt ?? DefaultImg} className='card-icon-primary' />
                        <Typography variant='h2' sx={{
                            fontSize: '20px',
                            lineHeight: '140%',
                            letterSpacing: '-0.6px',
                            fontWeight: 500,
                            color: '#fff',
                            paddingTop: '16px'
                        }}
                        >
                            {item.title}
                        </Typography>
                    </Box>
                    <Box sx={{
                        fontSize: '15px',
                        color: 'var(--body-text)',
                        fontWeight: 500,
                        lineHeight: '160%',
                        padding: '14px 32px 46px'
                    }}>
                        {item.owner}
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default JobCard