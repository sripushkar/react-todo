import React, { Component } from 'react'
import { FormGroup, TextField, IconButton } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'; 

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title: ""})
    }

    render() {
        return (
            <FormGroup >
                <TextField name="title" type="text" label="Add a task" id="standard-basic" value={this.state.title} onChange={this.onChange}/>
                <IconButton aria-label="Add Task" color="primary" onClick={this.onSubmit}>
                  <AddCircleOutlineIcon />
                </IconButton>
            </FormGroup>
        )
    }
}

export default AddTodo
