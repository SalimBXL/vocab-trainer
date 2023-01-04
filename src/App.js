import React, { useEffect } from 'react';
import { useState } from 'react';
import { prepareWordsToReview, dateNextShowAndNextLevel } from './utils';
import NavigationBar from './components/NavigationBar';
import Fiche from './components/Fiche';
import Statistics from './components/Statistics';
import TodaysProgression from './components/TodaysProgression';
import "./App.css";

import wordsJsonFile from "./words_json.json";

const words_json = JSON.parse(JSON.stringify(wordsJsonFile));
const reviewTypeConstants = { RECTO: "RECTO", VERSO: "VERSO", BOTH: "BOTH" };

const App = () => {  
  const [wordsToReview, setWordsToReview] = useState(prepareWordsToReview(words_json));
  const [wordsReviewed, setWordsReviewed] = useState(0);
  const [reviewType, setReviewType] = useState(reviewTypeConstants.RECTO);  
  const [todayList, setTodayList] = useState([]);


  useEffect(() => {
    console.log("TODAY :");
    todayList.map(today => console.log(today.recto, today.verso, today.fibonacci_level, today.nextDate) );
  },[todayList]);


  return (<div className='App'>
    <NavigationBar />
    <Statistics words_json={words_json} />
    <TodaysProgression wordsToReview={wordsToReview} reviewed={wordsReviewed} />

    <div className="row ListFiches">

      {wordsToReview.map(({recto, verso, fibonacci_level}, idx) => {
        const [nextDate, nextFibonacciLevel] = dateNextShowAndNextLevel(false, fibonacci_level);
        const _reviewType = (reviewType === reviewTypeConstants.BOTH) 
          ? Math.random() < 0.5 
            ? reviewTypeConstants.RECTO 
            : reviewTypeConstants.VERSO
         : reviewType;

        return <div key={idx} className="col-sm-6 col-md-4 col-lg-3">
          <Fiche 
            className="App-Fiche" 
            question={(_reviewType === reviewTypeConstants.RECTO) ? recto : verso}
            answer={(_reviewType === reviewTypeConstants.RECTO) ? verso : recto}
            nextLevel={nextFibonacciLevel}
            nextDate={nextDate}
            setTodayList={setTodayList}
          />
        </div>
        
      })}
    </div>
  </div>);
}

export default App;
