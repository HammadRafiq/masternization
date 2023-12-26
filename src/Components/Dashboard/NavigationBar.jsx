import React from 'react'
import { Link } from 'react-router-dom';
import MenuItem from './Common/MenuItem';
import DashboardIcon from '../../Assets/dashboard/dashboard-icon.svg'
import AccountIcon from '../../Assets/dashboard/profile-circle.svg'
import SavedIcon from '../../Assets/dashboard/clipboard-tick.png'

const NavigationBar = () => {
    return (
        <>
            
            <ul className="list-style-none">
                <MenuItem icon={DashboardIcon} title={'Dashboard'} link={'/dashboard'} />
                <MenuItem icon={AccountIcon} title={'Account Settings'} link={'/dashboard/account-settings'} />
                <MenuItem icon={SavedIcon} title={'Users'} link={'/dashboard/users'} />
               
                
            </ul>
        </>
    )
}

export default NavigationBar