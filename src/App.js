import React from 'react';
import './App.css';
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';
import Todos from './components/Todos';


function App() {
  state = {
    todos: [
      {
        "Take out the trash": 
      }
    ]
  }
  return (
    <div className="App">
      <Typography variant="h1">Hello</Typography>
      <Todos />
    </div>
  );
}

export default App;
