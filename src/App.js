import React from 'react';
import { useState } from 'react';
import { adZero, dateNextShowAndNextLevel } from './utils';


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
  20221118: [
    { word: "word_04", translation: "mot_04", fibonacci_level: 5 },
    { word: "word_05", translation: "mot_05", fibonacci_level: 1 },
    { word: "word_06", translation: "mot_06", fibonacci_level: 6 },
  ]
}

const prepareWordList = () => {
  const wlist = new Set();
  const now = new Date();
  const dateInt = parseInt(`${now.getFullYear()}${adZero(now.getMonth()+1)}${adZero(now.getDate())}`);
  Object
    .keys(words_json)
    .sort()
    .filter((date) => parseInt(date) <= dateInt)
    .map(date => words_json[date].map(mot => wlist.add(mot)));
  return Array.from(wlist);
}

const App = () => {
  const [wordList, setWords] = useState(prepareWordList);
  
  return (<div>
    <h1>Vocab Trainer</h1>
    <p>WordList : {wordList.length} {wordList.length < 2 ? "entry" : "entries"}</p>
    <ol>
      {wordList.map(({word, translation, fibonacci_level}) => {
        
        
        const [nextDate, nextFibonacciLevel] = dateNextShowAndNextLevel(false, fibonacci_level)

        return <li key={word}>{word} : {translation} ({fibonacci_level}) / {nextDate} ({nextFibonacciLevel})
        </li>
      })}
    </ol>
    
    <h3>***</h3>
  </div>);
}

export default App;
