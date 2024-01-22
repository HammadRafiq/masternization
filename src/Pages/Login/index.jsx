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
import CustomEmailField from '../../Components/Dashboard/Common/CustomEmailField';
import CustomPasswordField from '../../Components/Dashboard/CustomPasswordField';
import { useMutation, gql } from '@apollo/client';
import { getToken, setSession, setUser } from '../../Helpers/Utils';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';

const LOGIN = gql`
  mutation($email: String!, $password: String!){
    login(email: $email, password: $password) {
      token
    }
}
`


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const [login, { loading, data }] = useMutation(LOGIN, {
    refetchQueries: "all"
  })

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    login({
      variables: data,
      onCompleted: (data) => {
        setSession(data?.login?.token)
        setUser(true)
        navigate("/home")
      },
      onError: (err) => {
        enqueueSnackbar(err?.message || "An error occured", {
          variant: "error"
        })
      }
    })
  }


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
          Login to your account or <Link to="/registration" style={{textDecoration:'none', color:'var(--purple)'}}>Create an account</Link> 
        </Typography>

      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>

      <CustomEmailField
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
        <LoadButton text={'Login'} padding={'10px 112px'} loading={loading} />
      </form>
    </Box>
  );
};

export default Login;
