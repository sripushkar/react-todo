import React from 'react';
import './App.css';
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';
import Todos from './components/Todos';


class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Walk the dog",
        completed: false
      },
      {
        id: 3,
        title: "Cook Dinner",
        completed: false
      }
    ]
  }
  render(){
    return (
      <div className="App">
        <Typography variant="h1">Hello</Typography>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
