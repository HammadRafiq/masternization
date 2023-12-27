import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import BusinessIcon from '../../Assets/business_icon.svg'

const BloggingBusinessCard = () => {
    return (
        <>
            <Grid item xs={12} md={6} lg={4}>
                <Box sx={{
                    borderRadius: '16px',
                    border: '1px solid var(--stroke-card)',
                    background: '#fff',
                    padding: '24px 32px 24px'
                }}>
                    <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <img src={BusinessIcon} alt="Business Icon" />
                        <Typography variant="h2" sx={{
                            fontSize: '20px',
                            fontWeight: 500,
                            lineHeight: '28px',
                            letterSpacing: '-0.6px',
                            color: 'var(--black)'
                        }}>
                            How to start a blogging business in 7 steps
                        </Typography>
                    </Box>
                    <Typography variant="body2" sx={{
                        padding: '12px 0 24px',
                        fontSize: '14px',
                        lineHeight: '22px'
                    }}>
                        Blogging is a way of creating and sharing content on the internet to connect with an audience.
                    </Typography>
                    <Box>
                        <Typography sx={{
                            color: 'var(--purple)',
                            fontWeight: 500,
                            border:'1px solid var(--purple)',
                            fontSize: '14px',
                            lineHeight: '22px',
                            borderRadius: '48px',
                            background: 'rgba(107, 99, 251, 0.15)',
                            display: 'inline-block',
                            padding: '8px 24px',
                            marginRight:'6px'
                        }} variant="body2">Business</Typography>
                        <Typography sx={{
                            color: 'var(--purple)',
                            fontWeight: 500,
                            border:'1px solid var(--purple)',
                            fontSize: '14px',
                            lineHeight: '22px',
                            borderRadius: '48px',
                            background: 'rgba(107, 99, 251, 0.15)',
                            display: 'inline-block',
                            padding: '8px 24px'
                        }} variant="body2">Blogging</Typography>
                    </Box>

                </Box>
            </Grid>
        </>
    )
}

export default BloggingBusinessCard