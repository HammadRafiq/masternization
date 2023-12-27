import React from 'react'
import { Link } from 'react-router-dom';
import MenuItem from './Common/MenuItem';
import DashboardIcon from '../../Assets/dashboard/dashboard-icon.svg'
import AccountIcon from '../../Assets/dashboard/profile-circle.svg'
import SavedIcon from '../../Assets/dashboard/clipboard-tick.png'
import DashboardLogo from '../../Assets/dashboard/Logo.svg'
import Box from '@mui/material/Box';

const NavigationBar = () => {
    return (
        <>
            <Box sx={{padding:'24px 24px 40px'}}> 
                <img style={{maxWidth:'100%'}} src={DashboardLogo} alt="Dashboard Logo" />
            </Box>
            <ul className="list-style-none">
                <MenuItem icon={DashboardIcon} title={'Dashboard'} link={'/dashboard'} />
                <MenuItem icon={AccountIcon} title={'Account Settings'} link={'/dashboard/account-settings'} />
                <MenuItem icon={SavedIcon} title={'Users'} link={'/dashboard/users'} />
                <MenuItem icon={SavedIcon} title={'Creators'} link={'/dashboard/creators'} />
                <MenuItem icon={SavedIcon} title={'Saved Works'} link={'/dashboard/saved-works'} />
                <MenuItem icon={SavedIcon} title={'Content'} link={'/dashboard/content'} />
               
                
            </ul>
        </>
    )
}

export default NavigationBar