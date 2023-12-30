import React, { useState } from 'react'
import { Select, MenuItem, InputBase } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CustomSelectField = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const selectStyles = {
        width: '100%',
        '& .MuiSelect-select': {
            backgroundColor: 'white',
            width: '100%',
            padding: '16.5px 14px',
            borderRadius:'8px',
            color:'rgba(38, 38, 38, 0.5)',
            fontSize:'16px',
            lineHeight:'26px',
            fontFamily:'GeneralSans-Variable !important',
            
        },
        '& .MuiSelect-icon': {
            color: '#000',
            right: '8px',
        },
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (

        <>
            <label htmlFor="course-name">Category</label>
            <Select
                value={selectedOption}
                displayEmpty
                fullWidth
                IconComponent={ArrowDropDownIcon}
                input={<InputBase />}
                sx={selectStyles}
                onChange={handleChange}
            >
                <MenuItem value="" disabled>
                    {selectedOption ? selectedOption : 'Select category of your work'}
                </MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
       
            </Select>
        </>
    )
}

export default CustomSelectField