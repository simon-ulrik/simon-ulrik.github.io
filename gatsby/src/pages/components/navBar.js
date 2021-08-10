import React, { Component } from 'react'
import { Link } from "gatsby"
import "../../styles/navBar.css"

export default class NavBar extends Component {
    constructor(props) {
        // props.info: {title: "kjh", content: "kjhu"}
        // props.backLink: 'String'
        super(props);
        this.state = {toggle: ""};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            toggle: (this.state.toggle === "closed" || this.state.toggle === "") ? "open" : "closed"
        });
    }

    currenLocation() {
        return window.location.pathname
    }

    toggleBtnType() {
        return !!this.props.info ? "info" : "menu"
    }

    infoContent() {
        if (!!this.props.info) {
            return (
                <div id="info_content">
                    <h1>{this.props.info.title}</h1>
                    <p>{this.props.info.content}</p>
                </div>
            )
        }
    }

    render() {
        return (
            <nav id="nav_bar">
                <div id="nav_btns" className={this.state.toggle}>
                    <div id="back_btn" className={this.state.toggle}>
                        <span className="material-icons">
                            arrow_back
                        </span>
                    </div>
                    <div id="toggle_btn" className={this.toggleBtnType()} onClick={this.toggle}>
                        <span className="material-icons">
                            {this.state.toggle === "open" ? "close" : this.toggleBtnType()}
                        </span>
                    </div>
                </div>
                <div id="nav_content" className={`${this.toggleBtnType()} ${this.state.toggle}`}>
                    <ul id="nav_links">
                        <li><h1>{this.currenLocation()}</h1></li>
                        <li className="nav_link"><h1>Projects</h1></li>
                        <li className="nav_link"><h1>About me</h1></li>
                        <li className="nav_link"><h1>Contact</h1></li>
                    </ul>
                    {this.infoContent()}
                </div>
            </nav>
        )
    }
}
