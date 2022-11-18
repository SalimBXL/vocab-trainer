import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { prepareWordList, dateNextShowAndNextLevel, countWords } from './utils';
import ToggleButtons from './components/ToggleButtons';
import Fiche from './components/Fiche';
import LinearWithValueLabel from './components/ProgressBar';

const words_json = {
  20221115: [
    { word: "word_07", translation: "mot_07", fibonacci_level: 0 },
    { word: "word_08", translation: "mot_08", fibonacci_level: 2 },
    { word: "word_09", translation: "mot_09", fibonacci_level: 9 },
  ],
  20221117: [
    { word: "word_01", translation: "mot_01", fibonacci_level: 4 },
    { word: "word_02", translation: "mot_02", fibonacci_level: 3 },
    { word: "word_03", translation: "mot_03", fibonacci_level: 0 },
  ],
  20221119: [
    { word: "word_04", translation: "mot_04", fibonacci_level: 5 },
    { word: "word_05", translation: "mot_05", fibonacci_level: 1 },
    { word: "word_06", translation: "mot_06", fibonacci_level: 6 },
  ]
}

const reviewTypeConstants = { RECTO: "RECTO", VERSO: "VERSO", BOTH: "BOTH" };


const App = () => {
  const [wordList, setWords] = useState(prepareWordList(words_json));
  const [reviewType, setReviewType] = useState(reviewTypeConstants.BOTH);
  const totalWords = countWords(words_json);
  
  return (<div>
    <h1>Vocab Trainer</h1>

    <ToggleButtons 
      reviewTypeConstants={reviewTypeConstants} 
      reviewType={reviewType}
      handleTypeChange={setReviewType}
    />


    <p>WordList : {wordList.length} {wordList.length < 2 ? "entry" : "entries"}</p>

    <LinearWithValueLabel total={wordList.length} current={0} />



    <Box sx={{ 
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,
      },
    }}>
    
      {wordList.map(({word, translation, fibonacci_level}) => {
        
        const tempReviewType = (reviewType === reviewTypeConstants.BOTH) 
          ? Math.random() < 0.5 
            ? reviewTypeConstants.RECTO 
            : reviewTypeConstants.VERSO
         : reviewType;

        const [nextDate, nextFibonacciLevel] = dateNextShowAndNextLevel(false, fibonacci_level)  
        
        //const fiche = (tempReviewType === reviewTypeConstants.RECTO) 
        //  ? `${word} ... (${fibonacci_level}) / ${nextDate} (${nextFibonacciLevel})`
        //  : `... : ${translation} (${fibonacci_level}) / ${nextDate} (${nextFibonacciLevel})`;
        
        const fiche = (tempReviewType === reviewTypeConstants.RECTO) 
          ? <h3>word</h3>
          : <blockquote>{translation}</blockquote>;

        return <Fiche key={word} content={fiche}/>
        
      })}
    </Box>
    
    <h3>***</h3>
  </div>);
}

export default App;
