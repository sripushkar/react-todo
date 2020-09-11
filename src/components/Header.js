import React, { Component } from 'react'
import { Typography, Container, Box } from "@material-ui/core"
import { Link as LinkRoute} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <Container>
                <Typography variant="h2">Todo List</Typography>
                    <Box justifyContent="center" display="flex">
                        <LinkRoute to="/"><Typography variant="body1">Home |</Typography></LinkRoute> 
                        <LinkRoute to="/about"><Typography variant="body1">&nbsp;About</Typography></LinkRoute>
                    </Box>
                
                        
                                
            </Container>
        )
    }
}

export default Header
