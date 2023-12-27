import React from 'react'
import TextField from '@mui/material/TextField';
import { bgcolor, border } from '@mui/system';
import { useForm } from 'react-hook-form';

const CustomTextField = ({ label, placeholder, borderRadius, bgColor, paddingLeft, marginBottom }) => {


  return (
    <>
      <label htmlFor="course-name">{label}</label>
      <TextField
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
          marginBottom: marginBottom

        }}


      />
    </>
  )
}

export default CustomTextField