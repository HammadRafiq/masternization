import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import Logo from '../Assets/Masternization.svg'
import { useLocation, useNavigate } from "react-router-dom"

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
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const location = useLocation()
    const navigate = useNavigate()

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box>
            <Box className="pl-100 pr-100" sx={{ padding: "15px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}> {/* HEADER */}
                <img
                    src={Logo}
                />
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page.title}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => {
                        const isActiveMenu = location.pathname.includes(page.link)
                        return (
                            <Button
                                key={page.link}
                                onClick={() => {
                                    navigate(page.link)
                                    handleCloseNavMenu()
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
                <Box>
                    My Account
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
