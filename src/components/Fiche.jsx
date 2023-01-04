import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import "./Fiche.css";


export default function Fiche({question, answer, nextLevel, nextDate, setTodayList}) {
  const [showCheckAction, setShowCheckAction] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswerClick = () => {
    setShowCheckAction(() => true);
    setShowAnswer(() => true);
  };

  const handlePassClick = () => {
    setShowAnswer(() => true);
    setTodayList(prev => [
      ...prev,
      {
        recto: question, 
        verso: answer, 
        fibonacci_level: 0,
        date: nextDate
      }
    ]);
  };

  const handleSuccessClick = () => {
    setTodayList(prev => [
      ...prev,
      {
        recto: question, 
        verso: answer, 
        fibonacci_level: nextLevel,
        date: nextDate
      }
    ]);
  };

  const handleFailClick = () => {
    setTodayList(prev => [
      ...prev,
      {
        recto: question, 
        verso: answer, 
        fibonacci_level: 0,
        date: nextDate
      }
    ]);
  }
    
  const showAnswerPassButton = () => 
    <Stack direction="row" spacing={2}>
      <button className="btn btn-primary" onClick={handleAnswerClick}>Answer</button>
      <button className="btn btn-secondary" onClick={handlePassClick}>Pass</button>
    </Stack>;
  
  const showSuccessErrorButtons = () =>
  <Stack direction="row" spacing={2}>
    <button className="btn btn-success" onClick={handleSuccessClick}>Success</button>
    <button className="btn btn-danger" onClick={handleFailClick}>Error</button>
  </Stack>;

  console.log("FICHE : ", question, answer, nextLevel, nextDate);

  return (
    <Card className="Fiche">
      <CardContent>
        <h5>{question}</h5>
        {showAnswer && <blockquote>{answer}</blockquote> }
      </CardContent>
      <CardActions>
        {showCheckAction ? showSuccessErrorButtons() : showAnswerPassButton()}
      </CardActions>
    </Card>
  );
}