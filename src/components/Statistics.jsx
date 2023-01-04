import React from 'react';
import ProgressCircle from './ProgressCircle';
import Paper from '@mui/material/Paper';
import { wordsStatistics } from '../utils';

function Statistics({words_json}) {
    const {unknownWords, percentKnown, totalWords, lastReview} = wordsStatistics(words_json);
    return (
        <Paper elevation={3} style={{padding: "16px", margin: "8px"}}>
            <h3>Statistics</h3>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "flex-start"}}>
                <table>
                    <tbody>
                        <tr><td>Words to review</td><td>: {unknownWords}</td></tr>
                        <tr><td>Words in Base</td><td>: {totalWords}</td></tr>
                        <tr><td>Last review</td><td>: {lastReview}</td></tr>
                    </tbody>
                </table>
                <ProgressCircle value={percentKnown} />
            </div>
        </Paper>
    )
}

export default Statistics