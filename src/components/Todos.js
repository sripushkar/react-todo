import React from "react";
import "fontsource-roboto";
import TodoItem from "./TodoItem.js";
import { List } from "@material-ui/core";
import PropTypes from "prop-types"

class Todos extends React.Component {
  render() {
    return (
      <List>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} markComplete = {this.props.markComplete} delTodo={this.props.delTodo}/>
        ))}
      </List>
    );
  }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
