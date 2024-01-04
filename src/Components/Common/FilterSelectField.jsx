import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, ArrowDropDownIcon } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const FilterSelectField = () => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value);
        setSelectedValue(event.target.value);
        console.log('State Value', selectedValue);
    };

    return (
        <FormControl fullWidth sx={{ borderRadius: '76px', background: 'rgba(121, 120, 129, 0.15)' }}>
            <InputLabel id="select-label"></InputLabel>
            <Select
                labelId="select-label"
                value={selectedValue}
                onChange={handleChange}
                label="Sort by with dropdown icon"
                displayEmpty
                renderValue={(value) => (value ? value : 'Sort by')}
                sx={{
                    width: '200px',
                    textAlign: 'center',
                    fontFamily: 'GeneralSans-Variable !important',
                    color: 'var(--body-text)',
                    fontSize: '16px'
                }}

            >
                <MenuItem value="">
                    <em>Select your filter</em>
                </MenuItem>
                <MenuItem value={'option1'}>Ascending</MenuItem>
                <MenuItem value={'option2'}>Decending</MenuItem>
                <MenuItem value={'option3'}>Date</MenuItem>
                <MenuItem value={'option3'}>Random</MenuItem>
            </Select>
        </FormControl>
    );
};

export default FilterSelectField;
