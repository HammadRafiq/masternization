import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import ToolImg from '../../Assets/ToolIcon.svg'

const SavedCourses = () => {
    return (
        <>
            <Grid item xs={12} md={6} lg={4}>
                <Box sx={{
                    borderRadius: '16px',
                    border: '1px solid var(--stroke-card)',
                    background: '#fff',
                    position: 'relative',
                    padding: '12px'
                }}>
                    <img className="max-width-100" src={ToolImg} alt="Book Img" />
                    <Box sx={{ padding: ' 7px 0 0 12px' }}>
                        <h2 class="card-heading card-heading-inner">Superstar Blogging</h2>
                        <Box sx={{
                            margin: '8px 0 24px',
                        }}>
                            <Typography sx={{
                                color: 'var(--purple)',
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '150%',
                            }} variant="body2">Nomadic Matt</Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                                <p class="card-description">
                                Many people were hoping that if the Democrats won control of Congress they would reverse the online
                                </p>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default SavedCourses