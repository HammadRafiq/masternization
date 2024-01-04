import React from 'react'
import { useForm } from 'react-hook-form';
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';

const CustomTextField = ({ name, label, type, register, required, errors, mt, multiline, rows }) => {

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return (
        <>
            <Box sx={{ marginTop: mt }}>
                <label className="form-label" htmlFor={name}>{label}</label>
                <TextField
                    id={name}
                    name={name}
                    label=""
                    type={type}
                    fullWidth
                    multiline={multiline}
                    rows={rows}
                    sx={{
                        background: 'var(--light-purple)',
                        borderRadius: '8px',
                    }}
                    error={!!errors[name]}

                    {...register(name, { required })}
                />


            </Box>
            {errors[name] && (
                <Typography variant="body2" color="error">
                    {errors[name] && `${label} is required`}
                </Typography>
            )}
        </>
    )
}

export default CustomTextField