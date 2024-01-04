import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import CustomTextField from '../../../Components/Dashboard/Common/CustomTextField'
import CustomEmailField from '../../../Components/Dashboard/Common/CustomEmailField'
import CustomPasswordField from '../../../Components/Dashboard/CustomPasswordField';
import LoadButton from '../../../Components/Common/LoadButton';
import { useDropzone } from 'react-dropzone';
import AddCircle from '../../../Assets/dashboard/add-circle.svg'
import SimplePasswordField from '../../../Components/Dashboard/Common/SimplePasswordField';

const AccountSettings = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm();


  const newPassword = watch('newPassword');
  const confirmNewPassword = watch('confirmNewPassword');

  const validateConfirmPassword = (value) =>
    value === newPassword || 'New Passwords do not match';


  const onSubmit = (data) => {
    console.log(data); // Logs form data to console
  };

  {/* Drop Zone Image Upload */ }

  const [files, setFiles] = React.useState([]);

  const onDrop = (acceptedFiles) => {

    setFiles(acceptedFiles.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file),
    })));

    acceptedFiles.forEach((file) => {
      register(`file${file.name}`, { value: file });
    });

  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1,
    multiple: false,
  });

  return (
    <Box sx={{ padding: '40px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
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

            {/* Drop Zone Image Upload Code */}

            <Box sx={{ display: 'flex', marginTop: '24px' }}>
              <label class="form-label" for="workurl">Profile Picture</label>
              <div {...getRootProps()} style={{ display: 'inline-block' }}>
                <input {...getInputProps()} />
                <Box>
                  <img className="ml-16" src={AddCircle} style={{ cursor: 'pointer' }} alt="upload image" />
                </Box>
              </div>
              <Box className="testing123" sx={{ marginLeft: '20px' }}>


                {files.map((file) => (
                  <img
                    key={file.name}
                    src={file.preview}
                    alt={file.name}
                    style={{ maxWidth: '200px', maxHeight: '200px' }}
                  />
                ))}
              </Box>
            </Box>
            {errors.files && <span style={{ color: 'red' }}>Please upload an image</span>}
            {/* End of Image Drop Zone Section */}

            <CustomTextField
              name="username"
              label="Username"
              type="text"
              register={register}
              required={true}
              errors={errors}
              mt={'24px'}
            />

            <CustomEmailField
              register={register}
              errors={errors}
              label={'Email'}
              mt={'24px'}
              type={'email'}
              requiredMsg={'Email is required'}
              invalidMsg={'Invalid email address'}
            />

            <SimplePasswordField
              label="Password"
              name="password"
              register={register}
              error={!!errors.password}
              helperText={errors.password?.message}
              mt={'24px'}
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
              name="facebookurl"
              label="Facebook URL"
              type="text"
              register={register}
              required={true}
              errors={errors}
              mt={'24px'}
            />
            <CustomTextField
              name="instagramurl"
              label="Instagram URL"
              type="text"
              register={register}
              required={true}
              errors={errors}
              mt={'24px'}
            />
            <CustomTextField
              name="twitterurl"
              label="Twitter URL"
              type="text"
              register={register}
              required={true}
              errors={errors}
              mt={'24px'}
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

            <SimplePasswordField
              label="New Password"
              name="newPassword"
              register={register}
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message}
              mt={'24px'}
            />
            <SimplePasswordField
              label="Repeat new password"
              name="confirmNewPassword"
              register={register}
              error={!!errors.confirmNewPassword}
              helperText={errors.confirmNewPassword?.message}
              validate={validateConfirmPassword}
              mt={'24px'}
            />


            <Box sx={{ marginTop: '24px' }}>
              <LoadButton text={'Change'} padding={'10px 112px'} />
            </Box>

          </Grid>

        </Grid>
      </form>
    </Box >

  )
}

export default AccountSettings