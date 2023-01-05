import React from 'react';
import AppBar from '@mui/material/AppBar';

const NavigationBar = ({deck}) => {
    return (<AppBar 
        position="static" 
        style={{
            padding: "8px", 
            paddingBottom: "0px"
        }}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <h1>Vocab Trainer</h1>
            {deck
                ? deck.deckName
                : `[ no deck selected ]`
            }
        </div>
    </AppBar>)
}

export default NavigationBar