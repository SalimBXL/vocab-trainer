import * as React from 'react';
import Paper from '@mui/material/Paper';

export default function Fiche({content}) {
  return (
    <Paper elevation={3}>{content}</Paper>
  );
}