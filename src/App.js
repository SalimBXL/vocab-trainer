import React from 'react';
import { useState } from 'react';
import { prepareWordList, dateNextShowAndNextLevel } from './utils';
import ToggleButtons from './components/ToggleButtons';
import Fiche from './components/Fiche';
import LinearWithValueLabel from './components/ProgressBar';
import "./App.css";
import wordsJsonFile from "./words_json.json";

const words_json = JSON.parse(JSON.stringify(wordsJsonFile));

const App = () => {
  const reviewTypeConstants = { RECTO: "RECTO", VERSO: "VERSO", BOTH: "BOTH" };
  const [wordList, setWords] = useState(prepareWordList(words_json));
  const [reviewType, setReviewType] = useState(reviewTypeConstants.RECTO);
  
  return (<div className='App'>

    <header className='App-jumbo'>
      <div className='App-header'>
        <h1>Vocab Trainer</h1>
        <ToggleButtons 
          reviewTypeConstants={reviewTypeConstants} 
          reviewType={reviewType}
          handleTypeChange={setReviewType}
        />
      </div>
      <p>WordList : {wordList.length} {wordList.length < 2 ? "entry" : "entries"}</p>
    </header>

    <LinearWithValueLabel total={wordList.length} current={0} />

    <div className="row ListFiches">
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

        return <div key={word} className="col-sm-6 col-md-4 col-lg-3">
          <Fiche className="App-Fiche" content={fiche} />
        </div>
        
      })}
    </div>
  </div>);
}

export default App;
