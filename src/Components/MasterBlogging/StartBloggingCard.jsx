import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';

const StartBloggingCard = () => {
    return (
        <>
            <Grid item xs={12} md={6} lg={4}>
                <Box sx={{
                    borderRadius: '16px',
                    border: '1px solid var(--stroke-card)',
                    background: '#fff',
                    padding: '24px 32px 32px'
                }}>
                    <Typography sx={{
                        color: 'var(--purple)',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '16px',
                        borderRadius: '56px',
                        background: 'rgba(107, 99, 251, 0.15)',
                        display: 'inline-block',
                        padding: '9px 12px'
                    }} variant="body2">Opportunities</Typography>
                    <h2 class="card-heading">Create Your Own Blogs</h2>
                    <p class="card-description">Just click & drag to create beautiful pages in a matter of minutes. No designer talent or coding skills necessary.</p>
                </Box>
            </Grid>
        </>
    )
}

export default StartBloggingCard