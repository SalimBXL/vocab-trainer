import React from 'react';
import LinearWithValueLabel from './ProgressBar';
import Paper from '@mui/material/Paper';

const TodaysProgression = ({wordsToReview, reviewed }) => {
    return <Paper elevation={3} style={{padding: "8px", margin: "8px", flex: "auto"}}>
        <LinearWithValueLabel total={wordsToReview.length} current={reviewed.length} />
    </Paper>
}

export default TodaysProgression;