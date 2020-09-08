import React from 'react';
import 'fontsource-roboto';
import { Button } from '@material-ui/core';


class Todos extends React.Component {
    render(){
        return (
            this.props.todos.map((todo)=> <TodoItem />)
        );
    }
}

export default Todos;