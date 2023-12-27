import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

const MenuItem = ({ icon, title, link, linkRef }) => {
    const location = useLocation()
    const isActiveMenu = location.pathname.includes(linkRef)

    return (
        <>
            <Box
                className="dashboard-menu-item"
                sx={{ margin: '0 8px 21px', display: 'flex', alignItems: 'center', padding: '12px 20px', background: isActiveMenu ? "var(--purple)" : "var(--dark-purple)", borderRadius: "8px" }}
            >
                <img className="mr-8" src={icon} alt="menu icon" />
                <li><Link to={link}>{title}</Link></li>
            </Box>
        </>
    )
}

export default MenuItem