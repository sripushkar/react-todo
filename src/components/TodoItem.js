import React, { Component } from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle() {
    if (this.props.todo.completed) {
      return {
        textDecoration: "line-through",
      };
    } else {
      return {
        textDecoration: "none",
      };
    }
  }

  render() {
    return (
      <ListItem alignItems="center">
        <Checkbox onChange={this.props.markComplete.bind(this, this.props.todo.id)}> </Checkbox>
        <IconButton aria-label="delete" color="secondary" onClick={this.props.delTodo.bind(this, this.props.todo.id)}> <DeleteIcon /> </IconButton>
        <ListItemText style={this.getStyle()}>
          {this.props.todo.title}
        </ListItemText>
      </ListItem>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
