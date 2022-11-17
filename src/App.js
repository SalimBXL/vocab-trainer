import React from 'react';
import { useEffect, useState } from 'react';


const words_json = {
  20221115: [
    { word: "word_07", translation: "mot_07", fibonacci_level: 0 },
    { word: "word_08", translation: "mot_08", fibonacci_level: 0 },
    { word: "word_09", translation: "mot_09", fibonacci_level: 0 },
  ],
  20221117: [
    { word: "word_01", translation: "mot_01", fibonacci_level: 0 },
    { word: "word_02", translation: "mot_02", fibonacci_level: 0 },
    { word: "word_03", translation: "mot_03", fibonacci_level: 0 },
  ],
  20221118: [
    { word: "word_04", translation: "mot_04", fibonacci_level: 1 },
    { word: "word_05", translation: "mot_05", fibonacci_level: 1 },
    { word: "word_06", translation: "mot_06", fibonacci_level: 1 },
  ]
}

const adZero = (number) => number < 10 ? `0${number}` : `${number}`

const App = () => {
  const [words, setWords] = useState(words_json);
  const [dates, setDates] = useState(Object.keys(words).sort());

  const prepareWordList = () => {
    const wlist = new Set();
    const now = new Date();
    const dateInt = parseInt(`${now.getFullYear()}${adZero(now.getMonth()+1)}${adZero(now.getDate())}`);
    dates
      .filter((date) => parseInt(date) <= dateInt)
      .map(date => words[date].map(mot => wlist.add(mot)));
    return Array.from(wlist);
  }

  const wordList = prepareWordList();

  return (<div>
    <h1>Vocab Trainer</h1>
    <p>WordList : {wordList.length} {wordList.length < 2 ? "entry" : "entries"}</p>
    <ol>
      {wordList.map(({word, translation}) => 
        <li>{word} : {translation}</li>
      )}
    </ol>
    
    <h3>***</h3>
  </div>);
}

export default App;
