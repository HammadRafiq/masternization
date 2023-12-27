import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import Eye from '../../Assets/dashboard/eye.svg'
import LoadButton from '../../Components/Common/LoadButton';
import Logo from '../../Assets/dashboard/Logo.svg'
import CustomTextField from '../../Components/Dashboard/Common/CustomTextField';
import CustomPasswordField from '../../Components/Dashboard/CustomPasswordField';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    console.log(data); // Logs form data to console
  };

  return (
    <Box className="dashboard-logins-styles">
      <Box sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column', minWidth: '100%' }}>
        <img src={Logo} alt="Logo" />
        <Typography variant="h2" sx={{
          color: '#000',
          fontSize: '32px',
          fontWeight: 500,
          lineHeight: 'normal',
          margin: '16px 0 12px'
        }}>
          Welcome Back
        </Typography>
        <Typography variant="h5" sx={{
          color: '#000',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: 'normal',
          margin: '0 0 32px'
        }}>
          Login to your account or Create an account
        </Typography>

      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>

        <CustomTextField
          register={register}
          errors={errors}
          label={'Email'}
          type={'email'}
          requiredMsg={'Email is required'}
          invalidMsg={'Invalid email address'}
        />

        <CustomPasswordField
          register={register}
          errors={errors}
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          label={'Password'}
        />

        <LoadButton text={'Login'} padding={'10px 112px'} />
      </form>
    </Box>
  );
};

export default Login;
