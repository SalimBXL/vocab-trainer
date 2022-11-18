import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import "./Fiche.css";


export default function Fiche({content}) {
  const [showCheckAction, setShowCheckAction] = useState(false);

  const handleAnswerClick = () => setShowCheckAction(() => true);

  const handlePassClick = () => {};

  const handleSuccessClick = () => {};

  const handleFailClick = () => {};

  const showAnswerPass = () => 
    <Stack direction="row" spacing={2}>
      <button className="btn btn-primary" onClick={handleAnswerClick}>Answer</button>
      <button className="btn btn-secondary" onClick={handlePassClick}>Pass</button>
    </Stack>;
  
  const showSuccessError = () =>
  <Stack direction="row" spacing={2}>
    <button className="btn btn-success" onClick={handleSuccessClick}>Success</button>
    <button className="btn btn-danger" onClick={handleFailClick}>Error</button>
  </Stack>;

  return (
    <Card className="Fiche">

      <CardContent>
        <h5>[QUESTION]</h5>
        <blockquote>
          {showCheckAction ? `[ANSWER]` : <br /> }
        </blockquote>
      </CardContent>

      <CardActions>
        {showCheckAction ? showSuccessError() : showAnswerPass()}
      </CardActions>
    </Card>
  );
}