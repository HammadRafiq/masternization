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
import { getToken, setAdmin, setSession } from '../../Helpers/Utils';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { jwtDecode } from "jwt-decode"


const LOGIN_ADMIN = gql`
  mutation($email: String!, $password: String!){
    loginAdmin(email: $email, password: $password) {
      token
    }
}
`


const AdminLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()

    const [loginAdmin, { loading, data }] = useMutation(LOGIN_ADMIN, {
        refetchQueries: "all"
    })

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = (data) => {
        loginAdmin({
            variables: data,
            onCompleted: (data) => {
                setSession(data?.loginAdmin?.token)
                setAdmin(true)
                navigate("/dashboard/overview")
            },
            onError: (err) => {
                enqueueSnackbar(err?.message || "An error occured", {
                    variant: "error"
                })
            }
        })
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

export default AdminLogin;
