import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const StatsCard = ({numbers,title,increment}) => {
    return (
        <>
            <Grid item xs={12} md={3}>
                <Box sx={{
                    borderRadius: '16px',
                    border: '1px solid var(--stroke-card)',
                    padding:'24px'
                }}>
                    <Typography variant="h3" sx={{
                        color:'var(--black)',
                        fontSize:'32px',
                        lineHeight:'28px',
                        fontWeight:500,
                        letterSpacing:'-0.96px'
                    }}>
                    {numbers}
                    </Typography>
                    <Typography variant="h4" sx={{
                        color:'var(--body-text)',
                        fontSize:'18px',
                        lineHeight:'24px',
                        fontWeight:400,
                        margin:'20px 0'
                    }}>
                    {title}
                    </Typography>
                    <Typography variant="h5" sx={{
                        color:'var(--purple)',
                        fontSize:'14px',
                        lineHeight:'24px',
                        fontWeight:400,
                        background:'rgba(107, 99, 251, 0.20)',
                        borderRadius:'40px',
                        padding:'8px 24px'
                    }}>
                    {increment}
                    </Typography>
                </Box>
            </Grid>
        </>
    )
}

export default StatsCard