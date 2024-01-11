import React from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';

const SimplePasswordField = ({ label, register, name, mt, error, helperText, validate }) => {
    return (
        <Box sx={{ marginTop: mt }} className="mt-16">
            <label className="form-label" htmlFor="password">
                {label}
            </label>
            <TextField
                type="password"
                label={''}
                fullWidth
                sx={{
                    background: 'var(--light-purple)',
                    borderRadius: '8px',
                }}
                {...register(name, {
                    required: `${label} is required`,
                    minLength: {
                        value: 6,
                        message: `${label} must have at least 6 characters`,
                    },
                    validate: validate || undefined,
                })}
                error={!!error}

            />
            {helperText = error ?
                <Typography variant="body2" color="error">{helperText}</Typography>
                : ''}
        </Box>

    );
};

export default SimplePasswordField;
