import React, { useMemo } from 'react'
import Logo from '../Assets/Masternization.svg'
import { useLocation, useNavigate } from "react-router-dom"
import LoadButton from '../Components/Common/LoadButton'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CustomMenu from '../Components/Common/CustomMenu';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
    {
        title: "Home",
        link: "/home"
    },
    {
        title: "Courses",
        link: "/courses"
    },
    {
        title: "Tutorials",
        link: "/tutorials"
    },
    {
        title: "Books",
        link: "/books"
    },
    {
        title: "Tools & Resources",
        link: "/tools"
    },
    {
        title: "Youtube Channels",
        link: "/youtube-channels"
    },
    {
        title: "Jobs",
        link: "/jobs"
    }
]


const Layout = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Box>
            <Box className="pl-100 pr-100" sx={{ padding: "15px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}> {/* HEADER */}
                <img
                    src={Logo}
                />
                <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                    {pages.map((page) => {
                        const isActiveMenu = location.pathname.includes(page.link)
                        return (
                            <Button
                                key={page.link}
                                onClick={() => {
                                    navigate(page.link)
                                }}
                                sx={{
                                    my: 2, color: isActiveMenu ? "#6B63FB" : 'black', display: 'block',
                                }}
                            >
                                {page.title}
                            </Button>
                        )
                    })}
                </Box>
                <Box display="flex" gap="20px" alignItems="center">
                    <Box sx={{ display: { xs: "flex", lg: "none" } }}>
                        <CustomMenu options={pages} />
                    </Box>
                    <LoadButton
                        text={'Logout'}
                        styleProps={{
                            minWidth: {
                                xs: '100%',
                                md: '110px'
                            },
                            height: "40px",
                            fontSize: "14px",
                            marginTop: 0
                        }} />
                </Box>
            </Box>
            <Box>
                {children}
            </Box>
            <Box> {/* FOOTER */}

            </Box>
        </Box>
    )
}

export default Layout
