import React, { useEffect } from 'react';
import { useState } from 'react';
import { prepareWordsToReview, dateNextShowAndNextLevel } from './utils';
import NavigationBar from './components/NavigationBar';
import Fiche from './components/Fiche';
import Statistics from './components/Statistics';
import TodaysProgression from './components/TodaysProgression';
import DeckSelector from './components/DeckSelector';
import "./App.css";

import deck1 from "./decks/deck-1.json";
//import deck3 from "./decks/deck-3.json";
//import deck2 from "./decks/deck-1.json";

const reviewTypeConstants = { RECTO: "RECTO", VERSO: "VERSO", BOTH: "BOTH" };

const App = () => {
<<<<<<< HEAD
  const [reviewType, setReviewType] = useState(reviewTypeConstants.RECTO);  
  const [currentDeck, setCurrentDeck] = useState(null);
  const [currentJson, setCurrentJson] = useState(null);
  const [wordsToReview, setWordsToReview] = useState([]);
  const [wordsReviewed, setWordsReviewed] = useState(new Map());
  const [deckList, setDeckList] = useState([
    { deckName: "deck1", deck: deck1 }
  ]);
=======
  const reviewTypeConstants = { RECTO: "RECTO", VERSO: "VERSO", BOTH: "BOTH" };
  const [wordList, setWords] = useState(prepareWordList(words_json));
  const [reviewType, setReviewType] = useState(reviewTypeConstants.RECTO);
>>>>>>> origin/master
  
  useEffect(() => {
    if (currentDeck) {
      const {deck} = currentDeck;
      const json = JSON.parse(JSON.stringify(deck));
      setCurrentJson(prev => json);
      const words =prepareWordsToReview(json);
      setWordsToReview(prev => words);
    }
  }, [currentDeck]);

  function handleAnswer(result, item, idx) {
    const {fibonacci_level: currentFibonacciLevel, recto, verso} = item;
    const [nextDate, nextFibonacciLevel] = dateNextShowAndNextLevel(result, currentFibonacciLevel);
    const updatedItem = {
      date: nextDate,
      recto: recto, 
      verso: verso, 
      fibonacci_level: nextFibonacciLevel
    };
    setWordsReviewed(prev => prev.set(idx, updatedItem));
  }


  return (<div className='App'>

<<<<<<< HEAD
    <NavigationBar deckName={currentDeck}/>
    <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "flex-start", alignItems: "flex-start"}}>
      <DeckSelector deckList={deckList} setCurrentDeck={setCurrentDeck} />
      <TodaysProgression wordsToReview={wordsToReview} reviewed={wordsReviewed} />
    </div>
    <Statistics words_json={currentJson} />
    <hr />

    <div>
      {wordsToReview.map((item, idx) => {
        const style = wordsReviewed.has(idx) ? {display: "none"} : {};
        console.log(style);
        return (
        <div key={idx} className="col-sm-6 col-md-4 col-lg-3" style={style}>
          <Fiche 
            className="App-Fiche"
            item={item}
            handleAnswer={handleAnswer}
          />
        </div>)
=======
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
        
>>>>>>> origin/master
      })}
    </div>

  </div>);
}

export default App;
