import React, { useMemo } from 'react'
import Logo from '../Assets/Masternization.svg'
import { useLocation, useNavigate } from "react-router-dom"
import LoadButton from '../Components/Common/LoadButton'
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CustomMenu from '../Components/Common/CustomMenu';
import Footer from '../Components/Footer/Footer';
import { isAuthenticated, logoutHandler, setAdmin, setSession, setUser } from '../Helpers/Utils';
import { useParams } from 'react-router-dom'

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
        title: "My Account",
        link: "/my-account"
    }
]

const home = [
    {
        title: "Home",
        link: "/home"
    },
    {
        title: "My Account",
        link: "/my-account"
    }
]


const Layout = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const isLoggedIn = isAuthenticated()

    const { masterCourseId } = useParams();

    const isHomePage = location.pathname.endsWith('/home');
    const isHomeGuest = location.pathname.endsWith('/home-guest');
    const isMyAccount = location.pathname.endsWith('/my-account');

    const isMasterCourseIdStored = localStorage.getItem('selectedMasterCourseId') !== null;



    return (
        <Box>
            <Box className="pl-100 pr-100" sx={{ paddingTop: "15px", paddingBottom: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}> {/* HEADER */}
                <Box sx={{ width: { xs: "150px", md: "250px" } }}>
                    <img
                        src={Logo}
                        width="100%"
                    />
                </Box>
                {!isHomePage && !isHomeGuest && isMasterCourseIdStored && (
                    <>
                        <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                            {
                                pages
                                    .filter((page) => page.title !== 'My Account' || isLoggedIn)
                                    .map((page) => {
                                        const isActiveMenu = location.pathname.includes(page.link);

                                        return (
                                            <Button
                                                key={page.link}
                                                onClick={() => {
                                                    if (page.title === 'Home' || page.title === 'My Account') {
                                                        navigate(page.link);
                                                    } else {
                                                        navigate(`${page.link}/${masterCourseId}`);
                                                    }
                                                }}
                                                sx={{
                                                    my: 2,
                                                    px: '6px',
                                                    color: isActiveMenu ? '#6B63FB' : 'black',
                                                    display: 'block',
                                                    textTransform: 'capitalize',
                                                    fontWeight: isActiveMenu ? 700 : 400,
                                                }}
                                            >
                                                {page.title}
                                            </Button>
                                        );
                                    })}



                        </Box>


                        {
                            isLoggedIn && (
                                <>
                                    <Box display="flex" gap="20px" alignItems="center">
                                        <Box sx={{ display: { xs: "flex", lg: "none" } }}>
                                            <CustomMenu options={pages} />
                                        </Box>
                                        <LoadButton
                                            text={'Logout'}
                                            onClick={() => {
                                                logoutHandler()
                                                navigate('/login')
                                            }}
                                            styleProps={{
                                                minWidth: {
                                                    xs: '110px',
                                                },
                                                height: "40px",
                                                fontSize: "14px",
                                                marginTop: 0
                                            }}
                                        />
                                    </Box>
                                </>
                            )
                        }
                    </>
                )}

                {
                    (isHomePage || (isMyAccount && !isMasterCourseIdStored)) && (
                        <>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '15px' }}>
                                {home.map(page => {
                                    const isActiveMenu = location.pathname.includes(page.link);
                                    return (
                                        <Button
                                            key={page.link}
                                            onClick={() => navigate(page.link)}
                                            sx={{
                                                my: 2,
                                                px: '6px',
                                                color: isActiveMenu ? '#6B63FB' : 'black',
                                                display: 'block',
                                                textTransform: 'capitalize',
                                                fontWeight: isActiveMenu ? 700 : 400,
                                            }}
                                        >
                                            {page.title}
                                        </Button>
                                    )
                                })}
                                <LoadButton
                                    text={'Logout'}
                                    onClick={() => {
                                        logoutHandler()
                                        navigate('/login')
                                    }}
                                    styleProps={{
                                        minWidth: {
                                            xs: '110px',
                                        },
                                        height: "40px",
                                        fontSize: "14px",
                                        marginTop: 0
                                    }}
                                />
                            </Box>
                        </>
                    )
                }
                {!isLoggedIn && (
                    <Box display="flex" alignItems={"center"}>
                        <Typography
                            onClick={() => navigate("/login")}
                            fontWeight={600}
                            paddingRight={{
                                xs: "5px",
                                md: "20px"
                            }}
                            borderRight={"2px solid"}
                            marginRight={{
                                xs: "5px",
                                md: "20px"
                            }}
                            sx={{ cursor: "pointer" }}
                        >
                            Sign In
                        </Typography>
                        <LoadButton
                            text={'Sign Up'}
                            onClick={() => {
                                navigate("/registration")
                            }}
                            styleProps={{
                                minWidth: {
                                    xs: '110px',
                                },
                                height: "40px",
                                fontSize: "14px",
                                marginTop: 0
                            }}
                        />
                    </Box>
                )}
            </Box>
            <Box>
                {children}
            </Box>
            <Footer />
        </Box>
    )
}

export default Layout
