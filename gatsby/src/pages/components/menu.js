import React, { Component } from 'react'
import "../../styles/menu.css"

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {toggle: "closed"};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            toggle: (this.state.toggle === "closed") ? "open" : "closed"
        });
    }

    render() {
        return (
            <nav id="menu">
                <div id="nav_btns" className={this.state.toggle}>
                    <div id="toggle_btn" onClick={this.toggle}><h1>Toggle</h1></div>
                    <h1 id="menu_title"></h1>
                </div>
                <ul id="nav_links" className={this.state.toggle}>
                    <li>Books</li>
                        <ul>
                            <li>Timon på äventyr</li>
                            <li>2019 OF SIMON</li>
                        </ul>
                    <li>Imgs slides</li>
                        <ul>
                            <li>Simon's Powershot</li>
                            <li>Groda</li>
                            <li>STHLM</li>
                        </ul>
                    <li>Other imgs</li>
                        <ul>
                            <li>Åre/Skiing</li>
                            <li>Gothenburg</li>
                            <li>Jönköping</li>
                        </ul>
                    <li>About me</li>
                </ul>
            </nav>
        )
    }
}
