import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/system/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const LoginPrompt = () => {
  return (
    <Box sx={{
      width: '400px',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding:'20px'
    }}>
      <Box>
        <Typography sx={{
          fontSize: '20px',
          textAlign:'center',
          fontWeight: 600,
          marginBottom:'15px'
        }}>Please login first to navigate to this link</Typography>
      </Box>
      <Box sx={{display:'flex',gap:'15px'}}>
        <Box>
          <Link to="/login" style={{ textDecoration: 'none',  }}>
            <Button variant="contained" color="primary" sx={{background:'#6B63FB', boxShadow:'none'}}>
              Go to Login
            </Button>
          </Link>
        </Box>
        <Box>
          <Link to="/registration" style={{ textDecoration: 'none', boxShadow:'none' }}>
            <Button variant="contained" color="primary" sx={{background:'#6B63FB', boxShadow:'none'}}>
              Register Now
            </Button>
          </Link>
        </Box>
      </Box>

    </Box>
  );
};

export default LoginPrompt;
