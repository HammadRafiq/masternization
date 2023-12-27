import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import CustomTextField from '../../../Components/Dashboard/Common/CustomTextField'
import CustomPasswordField from '../../../Components/Dashboard/CustomPasswordField';
import LoadButton from '../../../Components/Common/LoadButton';

const AccountSettings = () => {

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
    <>
      <Box sx={{ padding: '40px' }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{
              color: '#000',
              fontSize: '32px',
              fontWeight: 500,
              lineHeight: '28px',
              letterSpacing: '-0.96px',
              marginBottom: '24px'
            }}>
              Basic Account Info
            </Typography>

            <CustomTextField
              register={register}
              errors={errors}
              label={'Username'}
              type={'text'}
              requiredMsg={'Username is required'}
              invalidMsg={'Invalid Username'}
              name={'profileusername'}
            />
            <CustomTextField
              register={register}
              errors={errors}
              label={'Email'}
              mt={'24px'}
              type={'email'}
              requiredMsg={'Email is required'}
              invalidMsg={'Invalid email address'}
              name={'profileemail'}
            />
            <CustomPasswordField
              register={register}
              errors={errors}
              showPassword={showPassword}
              handleClickShowPassword={handleClickShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
              mt={'24px'}
              label={'Password'}
              name={'profilepassword'}
            />

            <Typography variant="h2" sx={{
              color: '#000',
              fontSize: '32px',
              fontWeight: 500,
              lineHeight: '28px',
              letterSpacing: '-0.96px',
              margin: '40px 0 24px'
            }}>
              Connected Accounts
            </Typography>
            <CustomTextField
              register={register}
              errors={errors}
              label={'Facebook URL'}
              mt={'24px'}
              type={'text'}
              requiredMsg={'Email is required'}
              invalidMsg={'Invalid email address'}
            />
            <CustomTextField
              register={register}
              errors={errors}
              label={'Instagram URL'}
              mt={'24px'}
              type={'text'}
              requiredMsg={'Email is required'}
              invalidMsg={'Invalid email address'}
            />
            <CustomTextField
              register={register}
              errors={errors}
              label={'Twitter URL'}
              mt={'24px'}
              type={'text'}
              requiredMsg={'Email is required'}
              invalidMsg={'Invalid email address'}
            />
            <Typography variant="h2" sx={{
              color: '#000',
              fontSize: '32px',
              fontWeight: 500,
              lineHeight: '28px',
              letterSpacing: '-0.96px',
              margin: '40px 0 24px'
            }}>
              Multi-Factor Authentication
            </Typography>
            <LoadButton text={'Setup 2FA'} padding={'10px 112px'} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{
              color: '#000',
              fontSize: '32px',
              fontWeight: 500,
              lineHeight: '28px',
              letterSpacing: '-0.96px',
            }}>
              Change Password
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomPasswordField
                register={register}
                errors={errors}
                showPassword={showPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
                mt={'24px'}
                label={'New Password'}
              />
              <CustomPasswordField
                register={register}
                errors={errors}
                showPassword={showPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
                mt={'24px'}
                label={'Repeat new password'}
              />
              <Box sx={{ marginTop: '24px' }}>
                <LoadButton text={'Change'} padding={'10px 112px'} />
              </Box>
            </form>
          </Grid>
        </Grid>
      </Box>

    </>
  )
}

export default AccountSettings