import React, { Component } from 'react'
import { Link } from "gatsby"
import "../styles/nav_bar.css"

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

    navLinks(className) {
        const curren_location = window.location.pathname
        const links = ["/", "/projects", "/about", "/contact"]
        const titles = ["Home", "Projects", "About", "Contact"]

        let listItems = []

        links.forEach((link, i) => {
            if (link === curren_location) {
                listItems.push(<li key={i} className="nav_link menu"><h1>{titles[i]}</h1></li>)
            } else {
                listItems.push(<li key={i} className="nav_link menu"><Link to={link}>{titles[i]}</Link></li>)
            }
        })

        return !!this.props.info && !className ? <></> : <ul className={`nav_links ${className}`}> {listItems} </ul>
    }

    toggleBtnType() {
        return !!this.props.info ? "info" : "menu"
    }

    infoContent() {
        if (!!this.props.info) {
            return (
                <div>
                    <h1 id="info_title">{this.props.info.title}</h1>
                    <div id="info_content">
                        <p>{this.props.info.content}</p>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <nav id="nav_bar">
                <div id="nav_btns" className={this.state.toggle}>
                    <button id="back_btn" className={this.state.toggle}>
                        <Link to={this.props.backLink} className="material-icons">
                            arrow_back
                        </Link>
                    </button>

                    {this.navLinks("desktop")}

                    <button id="toggle_btn" className={this.toggleBtnType()} onClick={this.toggle}>
                        <span className="material-icons">
                            {this.state.toggle === "open" ? "close" : this.toggleBtnType()}
                        </span>
                    </button>
                </div>

                <div id="nav_content" className={`${this.toggleBtnType()} ${this.state.toggle}`}>
                    {this.navLinks()}
                    {this.infoContent()}
                </div>
            </nav>
        )
    }
}