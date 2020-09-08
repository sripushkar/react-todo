import React, { Component } from "react";
import { ListItem, ListItemText, Checkbox } from "@material-ui/core";
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
        <Checkbox onChange={this.props.markComplete.bind(this, this.props.todo.id)}></Checkbox>

        <ListItemText style={this.getStyle()}>{this.props.todo.title}</ListItemText>
      </ListItem>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
