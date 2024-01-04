import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useForm, Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
import Typography from '@mui/material/Typography';


export default function CustomRadioField({ register, required, errors, control, label, name, options }) {
    return (
        <FormControl className="radio-buttons-group" component="fieldset">
            <FormLabel sx={{
                color: '#000',
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '-0.54px',
                fontFamily: 'DM Sans, sans-serif !important',
                fontWeight: 500,
                margin: '24px 0 16px'
            }} id="demo-row-radio-buttons-group-label">{label}</FormLabel>
            <Controller
                rules={{ required: true }}
                control={control}
                name={name}
                render={({ field }) => {
                    {// console.log(field)
                    }
                    return (
                        <RadioGroup row {...field}>
                            {options.map((option) => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio />}
                                    label={option.label}
                                />
                            ))}
                           
                        </RadioGroup>
                    );
                }}
            />
            {errors[name] && (
                <Typography variant="body2" color="error">
                    {errors[name] && `Please select an option`}
                </Typography>
            )}
            
        </FormControl>
    );
}
