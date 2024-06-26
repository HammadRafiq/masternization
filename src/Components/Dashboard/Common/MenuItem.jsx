import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

const MenuItem = ({ icon, title, link, linkRef, styles = {} }) => {
    const location = useLocation()
    const isActiveMenu = location.pathname.includes(linkRef)

    return (
        <>
            <Box
                className="dashboard-menu-item"
                sx={{
                    margin: '0 8px 5px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 20px',
                    background: isActiveMenu ? "var(--purple)" : "var(--dark-purple)",
                    borderRadius: "8px",
                    ...styles
                }}
            >
                <Link to={link}>
                    <Box display={"flex"} alignItems={"center"}>
                        <img className="mr-8" src={icon} alt="menu icon" />
                        <li>{title}</li>
                    </Box>
                </Link>
            </Box>
        </>
    )
}

export default MenuItem