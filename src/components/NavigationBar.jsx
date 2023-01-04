import React from 'react';
import AppBar from '@mui/material/AppBar';

const NavigationBar = () => {
    return (<AppBar 
        position="static" 
        style={{
            padding: "8px", 
            paddingBottom: "0px"
        }}>
        <div>
            <h1>Vocab Trainer</h1>
        </div>
    </AppBar>)
}

export default NavigationBar