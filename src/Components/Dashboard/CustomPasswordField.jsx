import React from 'react'
import { TextField, IconButton, InputAdornment } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Box from '@mui/system/Box';


const CustomPasswordField = ({ register, errors, showPassword, handleClickShowPassword, handleMouseDownPassword, mt, label, name }) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/;
    return (
        <Box sx={{ marginTop: mt }} className="mt-16">
            <label className="form-label" htmlFor="password">
                {label}
            </label>
            <TextField
                id="password"
                name="Testingpassword"
                fullWidth
                sx={{
                    background: 'var(--light-purple)',
                    borderRadius: '8px',
                }}
                type={showPassword ? name : 'password'}
                error={!!errors.password}
                {...register('password', {
                    required: 'Password is required',
                    pattern: {
                        value: passwordRegex,
                        message:
                            'Password must be between 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter',
                    },
                })}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            {errors.password && (
                <Typography variant="body2" color="error">
                    {errors.password.message}
                </Typography>
            )}
        </Box>
    )
}

export default CustomPasswordField