import React, { useState } from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import DollarCircle from '../../Assets/dollar-circle.svg'
import Heart from '../../Assets/heart.svg'
import InfoCircle from '../../Assets/info-circle.svg'
import NoteBookIcon from '../../Assets/notebook_icon.svg'
import Typography from '@mui/material/Typography';
import LoginPrompt from '../Common/LoginPrompt';
import { Link } from 'react-router-dom';
import { Dialog, Button } from '@mui/material';
import { isAuthenticated, setAdmin, setSession } from '../../Helpers/Utils'
import PercentageCircle from '../../Assets/percentage-circle.svg'
import DefaultImg from "../../Assets/default/courses.svg"


const BloggingTutorialsCard = ({ item }) => {

    const isLoggedIn = isAuthenticated()

    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleLinkClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault(); // Prevent the default behavior (opening the link in a new tab)
            setPopupOpen(true);
        }
        // If user is logged in, the link will open as usual
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    let availabilityColor;

    let availabilityImage;

    if (item.availability === 'FREE') {
        availabilityImage = PercentageCircle;
        availabilityColor = '#009217';
    } else if (item.availability === 'PAID') {
        availabilityImage = DollarCircle;
        availabilityColor = '#6B63FB';
    } else {
        // Handle other cases if needed or provide a default image
        availabilityImage = PercentageCircle;
        availabilityColor = '#009217';
    }

    return (
        <>
            <Grid item xs={12} md={6} lg={4}>
                <Box sx={{
                    borderRadius: '16px',
                    border: '1px solid var(--stroke-card)',
                    background: '#fff',
                    position: 'relative',
                    height: "calc(100% - 30px)",
                    paddingBottom: "10px"
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'var(--purple)',
                        padding: '24px',
                        borderRadius: '16px 16px 0 0',
                    }}>
                        <img src={item?.icon?.src ?? DefaultImg} alt="Blogging Icon" className='card-icon-primary' />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '56px', minWidth: '50px', padding: '8px 16px' }}>
                            <img src={availabilityImage} alt="Dollar Circle" />
                            <Typography variant="body2" sx={{
                                color: availabilityColor,
                                fontSize: '16px',
                                fontWeight: 500,
                                lineHeight: '16px',
                                marginLeft: '4px'
                            }}>{item.availability}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ padding: '7px 24px 24px' }}>
                        <Box>
                            <Link
                                to={isLoggedIn ? item.url : '/your-actual-link'}
                                onClick={handleLinkClick}
                                href={isLoggedIn ? item.url : undefined}
                                target="_blank"
                                style={{ textDecoration: 'none' }}
                            >
                                <h2 class="card-heading card-heading-inner">{item.title}</h2>
                            </Link>

                            {!isLoggedIn && (
                                <Dialog open={isPopupOpen} onClose={handleClosePopup}>
                                    <LoginPrompt />
                                    <Button onClick={handleClosePopup}>Close</Button>
                                </Dialog>
                            )}
                        </Box>
                        <Typography sx={{
                            color: 'var(--purple)',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '150%',
                            margin: '8px 0 16px'
                        }} variant="body2">{item.owner}</Typography>
                        <p class="card-description maxwidth-85">
                            {item.desc}
                        </p>
                        <Box sx={{ position: 'absolute', right: '16px', bottom: '11px' }}>
                            <img src={Heart} alt="Heart" />
                            <img className="marginleft-8" src={InfoCircle} alt="Info Circle" />
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default BloggingTutorialsCard