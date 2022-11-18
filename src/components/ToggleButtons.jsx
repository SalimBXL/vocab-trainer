import React from 'react';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButtons = ({reviewTypeConstants, reviewType, handleTypeChange}) => {
    const [alignment, setAlignment] = useState(reviewType);

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        handleTypeChange(newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            {Object.keys(reviewTypeConstants).map((paire => 
                <ToggleButton value={paire}>{paire}</ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
}

export default ToggleButtons;