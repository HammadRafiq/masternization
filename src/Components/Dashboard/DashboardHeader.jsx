import React from 'react'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import SearchFieldIcon from '../../Assets/dashboard/search-normal.svg'
import UserIcon from '../../Assets/dashboard/user-icon.svg'
import LogOut from '../../Assets/dashboard/logout.svg'
import Typography from '@mui/material/Typography';
import { setAdmin, setSession, setUser } from '../../Helpers/Utils';
import { useNavigate } from "react-router";


const DashboardHeader = () => {
  const navigate = useNavigate()

  return (
    <Box className="dashboard-search" sx={{
      background: '#e9e8fe',
      padding: '14px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box>
        <TextField sx={{
          background: '#fff',
          borderRadius: '40px',
          color: 'var(--body-text)',
          width: '484px',
          paddingLeft: '16px'
        }}
          placeholder="Search"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <img src={SearchFieldIcon} alt="search icon" style={{ cursor: 'pointer', paddingRight: '10px' }} />
            ),
          }}
        />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={UserIcon} alt="User Icon" />
          <Typography sx={{
            marginLeft: '8px',
            color: '#000',
            fontSize: '16px',
            lineHeight: '28px'
          }} variant="h5">
            John Doe
          </Typography>
        </Box>

        <Box
          sx={{ display: 'flex', alignItems: 'center', marginLeft: '24px', cursor: "pointer" }}
          onClick={() => {
            setSession(null)
            setAdmin(null)
            setUser(null)
            navigate("/admin")
          }}
        >
          <img src={LogOut} alt="Logout Icon" />
          <Typography sx={{
            marginLeft: '8px',
            color: 'var(--purple)',
            fontSize: '16px',
            lineHeight: '28px'
          }} variant="h5">
            Logout
          </Typography>
        </Box>
      </Box>

    </Box>
  )
}

export default DashboardHeader