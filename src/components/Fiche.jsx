import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import "./Fiche.css";

const colors = {default: "white", passed: "lightgrey", failed: "lightpink", succeed: "lightgreen"};

export default function Fiche({item, handleAnswer, idx}) {
  const [showCheckAction, setShowCheckAction] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [backgroundCard, setBackgroundCard] = useState(colors.default);
  const {recto, verso} = item;

  const handleAnswerClick = () => {
    setShowAnswer(() => true);
    setShowCheckAction(() => true);
  };

  const handlePassClick = () => {
    setShowAnswer(() => true);
    setBackgroundCard(colors.passed);
    returnResult(false);
  };

  const handleSuccessClick = () => {
    setBackgroundCard(colors.succeed);
    return returnResult(true);
  };
  const handleFailClick = () => {
    setBackgroundCard(colors.failed);
    return returnResult(false);
  };
    
  function returnResult(result) {
    handleAnswer(result, item, idx);
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

  return (
    <Card className="Fiche" style={{backgroundColor: backgroundCard}}>
      <CardContent>
        <h5>{recto}</h5>
        <blockquote>
          {showAnswer ? `${verso}` : ` ? `}
        </blockquote>
      </CardContent>
      <CardActions>
        {backgroundCard === colors.default && (showCheckAction ? showSuccessErrorButtons() : showAnswerPassButton())}
      </CardActions>
    </Card>
  );
}