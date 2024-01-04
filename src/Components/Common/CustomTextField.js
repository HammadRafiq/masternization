import React from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';

const CustomTextField = ({ name, label, placeholder, borderRadius, bgColor, paddingLeft, marginBottom, register, required, errors, styles }) => {
  return (
    <>
      
        
        <label htmlFor="course-name">{label}</label>
        <TextField
          name={name}
          id="course-name"
          type="text"
          placeholder={placeholder}
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor: bgColor,
            borderRadius: borderRadius,
            outline: 'none !Important',
            paddingLeft: paddingLeft,
            marginBottom:marginBottom
          }}
          error={!!errors[name]}

          {...register(name, { required })}
        />
       
        
        {errors[name] && (
          <Typography sx={{ marginTop: '-15px', ...styles }} variant="body2" color="error">
            {errors[name] && `${label} is required`}
          </Typography>
        )}
      
    </>
  )
}

export default CustomTextField