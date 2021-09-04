import React, { Component } from 'react'
import NavBar from '../components/nav_bar.js'

import '../styles/projects.css'

export default class ProjectPage extends Component {
    constructor(props) {
        super(props);
        // props.info: {title: "kjh", content: "kjhu"}
        // props.type: "book", slides 
        this.state = {spread_i: 0};

        this.bookForward = this.bookForward.bind(this)
        this.bookBackward = this.bookBackward.bind(this)
    }

    book() {
        let book = []
        this.props.children.forEach((spread, i)=> {
            let hidden = this.state.spread_i === i ? "" : "hidden"

            if (Array.isArray(spread)) {
                book.push(
                    <div key={i} className={`spread ${hidden}`}>
                        {this.page(false, spread[0], 0,)}
                        {this.page(true, spread[1], 1,)}
                    </div>
                )
            } else {
                book.push(<div key={i} className={`spread ${hidden}`}>{this.page((i === 0), spread, "", "single")}</div>)
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
                onKeyDown={(e) => this.bookForward(e)}
                tabIndex="0"
                key={key}
                >{img}</div>
            : <div
            className={`page backward ${className}`}
                role="button"
                onClick={this.bookBackward}
                onKeyDown={(e) => this.bookBackward(e)}
                tabIndex="0"
                key={key}
                >{img}</div>
        )
    }

    bookForward(e) {
        if (this.state.spread_i < this.props.children.length && (e.key === "Enter" || e.type === "click")) {
            this.setState({
                spread_i: this.state.spread_i + 1
            });
        }
    }

    bookBackward(e) {
        if (this.state.spread_i > 0 && (e.key === "Enter" || e.type === "click")) {
            this.setState({
                spread_i: this.state.spread_i - 1
            });
        }
    }

    infoContainer() {
        return (
            <div id="info_container" className={`desktop`}>
                <h1 id="info_title" className="desktop">{this.props.info.title}</h1>
                <div id="info_content" className="desktop">
                    <p>{this.props.info.content}</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                <NavBar backLink="/projects" info={this.props.info}/>
                <main className="site_content project">
                    {this.infoContainer()}
                    {this.props.type === "book" ? this.book() : <></>}
                </main>
            </>
        )
    }
}
