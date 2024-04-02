import React, { useState, useEffect } from 'react'
import { Select, MenuItem, InputBase, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';

const CustomSelectField = ({ name, label, control, defaultValue, options = [], required = false, errors, validation, selectError }) => {
    const [selectedOption, setSelectedOption] = React.useState('');

    const selectStyles = {
        width: '100%',
        '& .MuiSelect-select': {
            backgroundColor: 'white',
            width: '100%',
            padding: '16.5px 14px',
            borderRadius: '8px',
            color: 'rgba(38, 38, 38, 0.5)',
            fontSize: '16px',
            lineHeight: '26px',
            fontFamily: 'GeneralSans-Variable !important',

        },
        '& .MuiSelect-icon': {
            color: '#000',
            right: '8px',
        },
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(selectedOption);
        alert('working');
    };

    return (

        <>
            <FormControl className="select-field-custom-styling" fullWidth>
                <label htmlFor="course-name">{label}</label>
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultValue}
                    rules={{
                        required: required
                    }}
                    render={({ field, fieldState: { invalid } }) => (
                        <>
                            <Select
                                labelId={`${name}-label`}
                                value={selectedOption}
                                fullWidth
                                onChange={handleChange}
                                IconComponent={ArrowDropDownIcon}
                                input={<InputBase />}
                                renderValue={(selected) => {
                                    const selectedOption = options.find((option) => option.value === selected);
                                    return selectedOption ? selectedOption.label : '';
                                }}
                                sx={selectStyles}
                                error={!!errors[name]}
                                id={name}
                                name={name}
                                {...field}
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                            {invalid && (
                                <Typography variant="body2" color="error">
                                    {`${label} is required`}
                                </Typography>
                            )}
                        </>
                    )}
                />
            </FormControl>


        </>
    )
}

export default CustomSelectField