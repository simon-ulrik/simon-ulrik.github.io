import React, { Component } from 'react'
import NavBar from '../components/nav_bar.js'

export default class ProjectPage extends Component {
    constructor(props) {
        super(props);
        // props.info: {title: "kjh", content: "kjhu"}
        // type: "", "book", "slide"
        this.state = {};
    }

    render() {
        return (
            <>
                <NavBar backLink="/projects" info={this.props.info}/>
            </>
        )
    }
}
