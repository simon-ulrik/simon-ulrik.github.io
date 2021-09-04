import React, { Component } from 'react'
import NavBar from '../components/nav_bar.js'

import '../styles/projects.css'

export default class ProjectPage extends Component {
    constructor(props) {
        super(props);
        // props.info: {title: "kjh", content: "kjhu"}
        // type: "", "book", "slide"
        this.state = {spread_i: 0, spread_length: 13};

        this.bookForward = this.bookForward.bind(this)
        this.bookBackward = this.bookBackward.bind(this)
    }

    book() {
        
        let imgs = this.props.children
        let book = []
        let spread = []
        let spread_i = 0

        imgs.forEach((img, i)=> {
            let hidden = this.state.spread_i === spread_i ? "" : "hidden"

            if (i === 0 || i === imgs.length - 1) {
                book.push(<div key={spread_i} className={`spread ${hidden}`}>{this.page((i === 0), img, "", "single")}</div>)
                spread_i += 1
            } else {
                spread.push(this.page(!(i % 2), img, spread.length, spread_i, ""))
                if (spread.length === 2) {
                    book.push(<div key={spread_i} className={`spread ${hidden}`}>{spread}</div>)
                    spread = []
                    spread_i += 1
                }
            }
        })

        return (
            <div id="book_container">
                {book}
            </div>
        )
    }

    page(condition, img, key, className) {
        return (
            condition
            ? <div
                className={`page forward ${className}`}
                role="button"
                onClick={this.bookForward}
                onKeyDown={this.bookForward}
                key={key}
                >{img}</div>
            : <div
            className={`page forward ${className}`}
                role="button"
                onClick={this.bookBackward}
                onKeyDown={this.bookBackward}
                key={key}
                >{img}</div>
        )
    }

    bookForward() {
        if (this.state.spread_i < this.state.spread_length) {
            this.setState({
                spread_i: this.state.spread_i + 1
            });
        }
    }

    bookBackward() {
        if (this.state.spread_i > 0) {
            this.setState({
                spread_i: this.state.spread_i - 1
            });
        }
    }

    infoContainer() {
        let hidden = this.state.spread_i > 0 || this.state.spread_i === this.state.spread_length ? "hidden" : ""

        return (
            <div id="info_container" className={hidden}>
                <h1>{this.props.info.title} {this.state.spread_i}</h1>
            </div>
        )
    }

    render() {
        return (
            <>
                <NavBar backLink="/projects" info={this.props.info}/>
                <main className="site_content project">
                    {this.infoContainer()}
                    {this.book()}
                </main>
            </>
        )
    }
}
