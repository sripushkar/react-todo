import React from 'react'
import "fontsource-roboto";
import { Typography, Container } from "@material-ui/core";
import Header from "../Header"

export default function About() {
    return (
        <Container>
            <Header />
            <Typography variant="h4">About</Typography>
            <Typography variant="body1">This is a basic Todo List App created with ReactJS, and styled with Material-UI</Typography>
        </Container>
    )
}

