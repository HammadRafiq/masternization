import React, { useMemo } from 'react'
import Logo from '../Assets/Masternization.svg'
import { useLocation, useNavigate } from "react-router-dom"
import LoadButton from '../Components/Common/LoadButton'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CustomMenu from '../Components/Common/CustomMenu';
import Footer from '../Components/Footer/Footer';

const pages = [
    {
        title: "Home",
        link: "/home"
    },
    {
        title: "Dashboard",
        link: "/master-blogging"
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
        title: "Tools",
        link: "/tools"
    },
    {
        title: "YouTube Channels",
        link: "/youtube-channels"
    },
    {
        title: "Groups",
        link: "/groups-forums"
    },
    {
        title: "Jobs",
        link: "/jobs"
    },
    {
        title:"My Account",
        link:"/my-account"
    }
]


const Layout = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Box>
            <Box className="pl-100 pr-100" sx={{ paddingTop: "15px", paddingBottom: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}> {/* HEADER */}
                <Box sx={{ width: { xs: "150px", md: "250px" } }}>
                    <img
                        src={Logo}
                        width="100%"
                    />
                </Box>
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
                                    my: 2, px: "6px", color: isActiveMenu ? "#6B63FB" : 'black', display: 'block', textTransform: "capitalize", fontWeight: isActiveMenu ? 700 : 400
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
                                xs: '110px',
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
            <Footer />
        </Box>
    )
}

export default Layout
