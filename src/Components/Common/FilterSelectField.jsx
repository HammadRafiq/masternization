import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, ArrowDropDownIcon } from '@mui/material';

const FilterSelectField = ({
    onSort = () => null
}) => {
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        onSort(event.target.value)
    };

    return (
        <FormControl className="select-field-custom-styling" fullWidth sx={{ marginTop: { xs: '15px', md: 0 }, borderRadius: '76px', background: 'rgba(121, 120, 129, 0.15)' }}>
            <InputLabel id="select-label"></InputLabel>
            <Select
                labelId="select-label"
                value={selectedValue}
                onChange={handleChange}
                label="Sort by with dropdown icon"
                displayEmpty
                renderValue={(value) => (value ? value : 'Sort by')}
                sx={{
                    width: { xs: '100%', md: '200px' },
                    textAlign: 'center',
                    fontFamily: 'GeneralSans-Variable !important',
                    color: 'var(--body-text)',
                    fontSize: '16px'
                }}
            >
                <MenuItem value="">
                    <em>Select your filter</em>
                </MenuItem>
                <MenuItem value={'NEWEST'}>Newest</MenuItem>
                <MenuItem value={'OLDEST'}>Oldest</MenuItem>
                <MenuItem value={'ASCENDING'}>Ascending</MenuItem>
                <MenuItem value={'DESCENDING'}>Decending</MenuItem>
            </Select>
        </FormControl>
    );
};

export default FilterSelectField;
