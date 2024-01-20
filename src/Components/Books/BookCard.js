import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Heart from '../../Assets/heart.svg'
import InfoCircle from '../../Assets/info-circle.svg'
import BookImg from '../../Assets/book_icon.svg'
import Typography from '@mui/material/Typography';
import BookLinkIcon from '../../Assets/book_link_icon.svg'


const BookCard = ({ book }) => {
    return (
        <>
            <Grid item xs={12} md={4} lg={3}>
                <Box sx={{
                    borderRadius: '16px',
                    border: '1px solid var(--stroke-card)',
                    background: '#fff',
                    position: 'relative',
                    padding: '24px'
                }}>
                    <img className="max-width-100" src={book.icon.src} alt="Book Img" />
                    <h2 class="card-heading card-heading-inner">{book.title}</h2>
                    <Box sx={{
                        margin: '8px 0 24px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{
                            fontWeight: 400,
                            color: 'var(body-text)',
                            fontSize: '16px',
                            lineHeight: '150%',
                            marginRight: '5px'
                        }}>by</Typography>
                        <Typography sx={{
                            color: 'var(--purple)',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '150%',
                        }} variant="body2">{book.owner}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <img src={BookLinkIcon} alt="Book Link" />
                        <Box>
                            <img src={Heart} alt="Heart" />
                            <img className="marginleft-8" src={InfoCircle} alt="Info Circle" />
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default BookCard