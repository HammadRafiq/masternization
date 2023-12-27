import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid';
import Logo from '../../Assets/Masternization.svg'
import Facebook from '../../Assets/Facebook.svg'
import Twitter from '../../Assets/Twitter.svg'
import Instagram from '../../Assets/Instagram.svg'


const Footer = () => {
    return (
        <>
            <Box sx={{
                background: '#fff',
                padding: {
                    xs:'50px 20px',
                    md:'93px 100px 47px',
                },
            }}>
                <Grid container spacing={2.5}>
                    <Grid sx={{display:'flex',justifyContent:'center'}} item xs={12} md={4}>
                        <img src={Logo} alt="logo" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{
                            fontSize: '16px',
                            color: '#141414',
                            lineHeight: '36px',
                            fontWeight: 600,
                            textAlign: 'center'
                        }}>
                            Find Us On Social Media:
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '17px', marginTop: '9px' }}>
                            <Box>
                                <img src={Facebook} alt="Facebook" />
                            </Box>
                            <Box>
                                <img src={Twitter} alt="Facebook" />
                            </Box>
                            <Box>
                                <img src={Instagram} alt="Facebook" />
                            </Box>

                        </Box>
                        <Typography sx={{ textAlign: 'center', lineHeight: '36px', color: 'var(--black)' }}>
                            support@masternization.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box display="flex" justifyContent={{xs:"center",md:"flex-end"}}>
                            <Typography sx={{ textAlign: 'center', lineHeight: '36px', color: 'var(--black)' }}>
                                Terms of Service | Privacy Policy
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ maxWidth: '1090px', margin: '39px auto 0', paddingTop: '20px', borderTop: '1px solid #E4D8D8' }}>
                    <Typography sx={{ textAlign: 'center', lineHeight: '36px', color: 'var(--black)' }}>
                        Copyright @ 2023 Masternization
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default Footer