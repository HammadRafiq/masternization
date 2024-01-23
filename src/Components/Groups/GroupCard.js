import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Heart from '../../Assets/heart.svg'
import InfoCircle from '../../Assets/info-circle.svg'
import Typography from '@mui/material/Typography';
import DefaultImg from "../../Assets/default/groups.svg"

const GroupCard = ({ item }) => {
    return (
        <>
            <Grid item xs={12} md={6} lg={4}>
                <Box sx={{
                    borderRadius: '16px',
                    border: '1px solid var(--stroke-card)',
                    padding: '24px',
                    background: '#fff',
                    position: 'relative',
                    height: "calc(100% - 30px)"
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <img className='card-icon-primary' src={item.icon.src ?? DefaultImg} alt={item.icon.alt} />
                    </Box>
                    <h2 class="card-heading">{item.title}</h2>
                    <Typography sx={{
                        color: 'var(--purple)',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '150%',
                        margin: '8px 0 16px'
                    }} variant="body2">{item.owner}</Typography>
                    <p class="card-description maxwidth-85">{item.desc}</p>
                    <Box sx={{ position: 'absolute', right: '16px', bottom: '11px' }}>
                        <img src={Heart} alt="Heart" />
                        <img className="marginleft-8" src={InfoCircle} alt="Info Circle" />
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default GroupCard