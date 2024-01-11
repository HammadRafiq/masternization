import React from 'react'
import { Link } from 'react-router-dom';
import MenuItem from './Common/MenuItem';
import DashboardIcon from '../../Assets/dashboard/dashboard-icon.svg'
import AccountIcon from '../../Assets/dashboard/profile-circle.svg'
import SavedIcon from '../../Assets/dashboard/clipboard-tick.png'
import DashboardLogo from '../../Assets/dashboard/Logo.svg'
import Box from '@mui/material/Box';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';





const MENU = [
    {
        title: "Dashboard",
        icon: DashboardIcon,
        link: "/dashboard"
    },
    {
        title: "Account Settings",
        icon: AccountIcon,
        link: "/dashboard/account-settings"
    },
    {
        title: "Dashboard",
        icon: DashboardIcon,
        link: "dashboard"
    },
    {
        title: "Dashboard",
        icon: DashboardIcon,
        link: "dashboard"
    },
]

const NavigationBar = () => {

    const [open, setOpen] = React.useState(false);

    const [open1, setOpen1] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClick1 = () => {
        setOpen1(!open1);
    }

    return (
        <>
            <Box sx={{ padding: '24px 24px 40px' }}>
                <img style={{ maxWidth: '100%' }} src={DashboardLogo} alt="Dashboard Logo" />
            </Box>
            <ul className="list-style-none">

                <MenuItem icon={DashboardIcon} title={'Dashboard'} link={'/dashboard/overview'} linkRef="overview" />
                <MenuItem icon={AccountIcon} title={'Account Settings'} link={'/dashboard/account-settings'} linkRef="account-settings" />
                <MenuItem icon={SavedIcon} title={'Users'} link={'/dashboard/users'} linkRef="users" />
                <MenuItem icon={SavedIcon} title={'Creators'} link={'/dashboard/creators'} linkRef="creators" />
                <MenuItem icon={SavedIcon} title={'Saved Works'} link={'/dashboard/saved-works'} linkRef="saved-works" />

            </ul>

            <List
                sx={{ width: '100%', bgcolor: 'var(--dark-purple)', color: '#fff', }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className="dasboard-dropdown-list"
            >
                {/* Content Post Type */}
                <ListItemButton sx={{ marginLeft: '12px', paddingTop: '0px', }} onClick={handleClick}>
                    <ListItemIcon sx={{ minWidth: 'auto', marginRight: '8px' }}>
                        <img src={SavedIcon} alt="menu icon" />
                    </ListItemIcon>
                    <ListItemText className="dashboard-menu-dropdown" primary="Content" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" >
                        <ListItemButton sx={{ pl: 4, paddingTop: 0, paddingBottom: 0 }}>
                            <MenuItem icon={SavedIcon} title={'Add Content'} link={'/dashboard/content'} linkRef="content" styles={{ margin: 0, padding: '8px 20px' }} />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, paddingTop: 0, paddingBottom: 0 }}>
                            <MenuItem icon={SavedIcon} title={'Listed Works'} link={'/dashboard/listed-works'} linkRef="listed-works" styles={{ margin: 0, padding: '8px 20px' }} />
                        </ListItemButton>
                    </List>
                </Collapse>

                {/* Master Course Post Type */}
                <ListItemButton sx={{ marginLeft: '12px', paddingTop: '0px', marginTop:'21px' }} onClick={handleClick1}>
                    <ListItemIcon sx={{ minWidth: 'auto', marginRight: '8px' }}>
                        <img src={SavedIcon} alt="menu icon" />
                    </ListItemIcon>
                    <ListItemText className="dashboard-menu-dropdown" primary="Master Course" />
                    {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                    <List component="div" >
                        <ListItemButton sx={{ pl: 4, paddingTop: 0, paddingBottom: 0 }}>
                            <MenuItem icon={SavedIcon} title={'Add Master Course'} link={'/dashboard/add-master-course'} linkRef="add-master-course" styles={{ margin: 0, padding: '8px 20px' }} />
                        </ListItemButton>
                    </List>
                    <List component="div" >
                        <ListItemButton sx={{ pl: 4, paddingTop: 0, paddingBottom: 0 }}>
                            <MenuItem icon={SavedIcon} title={'View Master Courses'} link={'/dashboard/listed-master-courses'} linkRef="listed-master-courses" styles={{ margin: 0, padding: '8px 20px' }} />
                        </ListItemButton>
                    </List>
                </Collapse>

            </List>




        </>
    )
}

export default NavigationBar