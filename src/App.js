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
      })}
    </div>

  </div>);
}

export default App;
