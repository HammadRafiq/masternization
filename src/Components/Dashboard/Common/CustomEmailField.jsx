import React from 'react'
import { useForm } from 'react-hook-form';
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';

const CustomEmailField = ({ register, errors, label, mt, type, requiredMsg, invalidMsg, name }) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return (
        <>
            <>
                <Box sx={{ marginTop: mt }}>
                    <label className="form-label" htmlFor="email">{label}</label>
                    <TextField
                        id="email"
                        type="text"
                        name=""

                        fullWidth
                        sx={{
                            background: 'var(--light-purple)',
                            borderRadius: '8px',
                        }}

                        error={!!errors.email}
                        //helperText={errors.email ? errors.email.message : ''}
                        {...register(type, {
                            required: requiredMsg,
                            pattern: {
                                value: emailRegex,
                                message: invalidMsg
                            }
                        })}
                    />
                </Box>
                {errors.email && (
                    <Typography variant="body2" color="error">
                        {errors.email.message}
                    </Typography>
                )}
            </>
        </>


    )
}

export default CustomEmailField