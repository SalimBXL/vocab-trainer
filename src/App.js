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
  const [reviewType, setReviewType] = useState(reviewTypeConstants.RECTO);  
  const [currentDeck, setCurrentDeck] = useState(null);
  const [currentJson, setCurrentJson] = useState(null);
  const [wordsToReview, setWordsToReview] = useState([]);
  const [wordsReviewed, setWordsReviewed] = useState(0);
  const [deckList, setDeckList] = useState([
    { deckName: "deck1", deck: deck1 }
  ]);
  
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
    setWordsToReview(prev => {
      prev[idx] = updatedItem;
      return prev;
    });
    setWordsReviewed(prev => ++prev);
  }

  return (<div className='App'>
    <NavigationBar deck={currentDeck}/>
    <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "flex-start", alignItems: "flex-start"}}>
      <DeckSelector deckList={deckList} setCurrentDeck={setCurrentDeck} />
      <TodaysProgression toReview={wordsToReview.length} reviewed={wordsReviewed} />
    </div>
    <Statistics words_json={currentJson} />
    <hr />

    <div className='container-fluid'>
    <div className="row">
      {wordsToReview.map((item, idx) => {
        return (
        <div className='col-sm-4' key={idx}>
          <Fiche 
            className="App-Fiche"
            item={item}
            idx={idx}
            handleAnswer={handleAnswer}
          />
        </div>)
      })}
    </div>
    </div>
  </div>);
}

export default App;
