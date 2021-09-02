import React, { Component } from 'react'
import { Link } from "gatsby"

import "../styles/pic_grid.css"

export default class PicGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    gridItems() {
        let items = this.props.children
        let links = this.props.links
        let divs = []

        items.forEach((staticImg, i) => {
            divs.push(
                <Link key={i} to={links[i]}>
                    {staticImg}
                </Link>
            )
        })

        return divs
    }

    render() {
        return (
            <div className="grid_container">
                <div className="pic_grid">
                    {this.gridItems()}
                </div>
            </div>
        )
    }
}
