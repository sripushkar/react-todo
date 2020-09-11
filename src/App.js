import React from "react";
import "./App.css";
import "fontsource-roboto";
import { Typography, Container } from "@material-ui/core";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo"

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Walk the dog",
        completed: false,
      },
      {
        id: 3,
        title: "Cook Dinner",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = title => {
    const newTodo = {
        id: this.state.todos[this.state.todos.length - 1].id + 1,
        title,
        completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <Container>
        <div className="App">
          <Typography variant="h2">Todo List</Typography>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          <AddTodo addTodo={this.addTodo}/>
        </div>
      </Container>
    );
  }
}

export default App;
