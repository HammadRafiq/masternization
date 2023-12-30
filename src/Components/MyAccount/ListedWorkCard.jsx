import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import ToolImg from '../../Assets/ToolIcon.svg'
import PercentageCircle from '../../Assets/percentage-circle.svg'
import VaultBg from '../../Assets/valut-bg.svg'
import EyeIcon from '../../Assets/eye-icon.svg'
import SubscribeIcon from '../../Assets/subscribe-icon.svg'
import EditIcon from '../../Assets/edit-icon.svg'
import LoadButton from '../Common/LoadButton';


const ListedWorkCard = () => {
    return (
        <>
            <Box sx={{
                background: '#fff',
                borderRadius: '16px',
                border: '1px solid var(--stroke-card)',
                padding: '23px 28px',
                marginBottom: '36px'
            }}>
                <Grid container spacing={2.5}>
                    <Grid item xs={12} md={4}>
                        <img src={VaultBg} alt="Vault" style={{ maxWidth: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box>
                            <Typography variant="h3" sx={{
                                fontSize: '24px',
                                lineHeight: '28px',
                                fontWeight: 700,
                                letterSpacing: '-0.72px'
                            }}>
                                Superstar Blogging
                            </Typography>
                            <Typography sx={{
                                color: 'var(--purple)',
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '150%',
                                marginTop: '8px'
                            }} variant="body2">Nomadic Matt</Typography>
                            <Grid container spacing={2.5}>
                                <Grid item xs={12} md={3}>
                                    <Box sx={{
                                        border: '1px solid var(--stroke-card)',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '15px 0 25px',
                                        flexDirection: 'column',
                                        marginTop: '15px'
                                    }}>
                                        <img src={EyeIcon} alt="Eye Icon" />
                                        <Typography sx={{
                                            color: 'var(--purple)',
                                            fontWeight: 700,
                                            fontSize: '16px',
                                            lineHeight: '150%',
                                            marginTop: '8px'
                                        }} variant="body2">Views</Typography>
                                        <Typography variant="h5" sx={{
                                            color: 'var(--body-text)',
                                            fontSize: '28px',
                                            lineHeight: "31px",
                                            marginTop: '13px'
                                        }}>
                                            435
                                        </Typography>
                                    </Box>

                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Box sx={{
                                        border: '1px solid var(--stroke-card)',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '15px 0 25px',
                                        flexDirection: 'column',
                                        marginTop: '15px'
                                    }}>
                                        <img src={SubscribeIcon} alt="Eye Icon" />
                                        <Typography sx={{
                                            color: 'var(--purple)',
                                            fontWeight: 700,
                                            fontSize: '16px',
                                            lineHeight: '150%',
                                            marginTop: '8px'
                                        }} variant="body2">Subscribers</Typography>
                                        <Typography variant="h5" sx={{
                                            color: 'var(--body-text)',
                                            fontSize: '28px',
                                            lineHeight: "31px",
                                            marginTop: '13px'
                                        }}>
                                            1,025
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{
                                        border: '1px solid var(--stroke-card)',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '15px 0 25px',
                                        flexDirection: 'column',
                                        marginTop: '15px'
                                    }}>
                                        <img src={EditIcon} alt="Eye Icon" />
                                        <Typography sx={{
                                            color: 'var(--purple)',
                                            fontWeight: 700,
                                            fontSize: '16px',
                                            lineHeight: '150%',
                                            marginTop: '8px'
                                        }} variant="body2">Actions</Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '13.55px',
                                            marginTop: '8px'
                                        }}>
                                            <LoadButton text={'Feature'} styleProps={{ fontSize: '12px', fontFamily: 'DM Sans !important', fontWeight: 700, height: '35px', minWidth: '131px' }} />
                                            <LoadButton text={'Promote'} styleProps={{ fontSize: '12px', fontFamily: 'DM Sans !important', fontWeight: 700, height: '35px', minWidth: '131px' }} />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                </Grid>

            </Box>
        </>
    )
}

export default ListedWorkCard