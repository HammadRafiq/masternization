import { Box, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom"

const CustomMenu = ({
    renderUI = <MenuIcon sx={{ fontSize: "34px" }} />,
    options = [],
    padding = "5px 13px",
    styleObj = {},
}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()

    const handleClose = (e) => {
        e.stopPropagation()
        setAnchorEl(null)
    }


    return (
        <Box sx={{ overflow: "visible" }}>
            <Box
                onClick={event => {
                    event.stopPropagation()
                    setAnchorEl(event.currentTarget)
                }}
                sx={{
                    padding: padding,
                    cursor: "pointer",
                    ...styleObj
                }}
            >
                {renderUI}
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    ".MuiMenu-paper": {
                        backgroundColor: "#fff"
                    }
                }}
            >
                {options?.map((item, index) => (
                    <MenuItem
                        key={item?.title + index}
                        onClick={e => {
                            handleClose(e)
                            navigate(item.link)
                        }}
                    >
                        <Box style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <Typography variant='body2'>
                                {item.title}
                            </Typography>
                        </Box>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default CustomMenu
