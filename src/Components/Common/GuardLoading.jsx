import React from 'react'
import { ReactComponent as Logo } from "../../Assets/dashboard/Logo.svg"
import { Box, CircularProgress } from '@mui/material'

const GuardLoading = () => {
    return (
        <Box style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box textAlign={"center"}>
                <CircularProgress sx={{color: "#6B63FB"}} />
                <Box>
                    <Logo />
                </Box>
            </Box>
        </Box>
    )
}

export default GuardLoading