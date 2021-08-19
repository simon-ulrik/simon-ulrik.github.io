import React, { Component } from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.css"
import "../styles/index_page.css"

export default class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    navLinks() {
      const links = ["/projects", "/about", "/contact"]
      const titles = ["Projects", "About", "Contact"]
      let listItems = []
    
      links.forEach((link, i) => {
        listItems.push(<li key={i} className="nav_link"><Link to={link}>{titles[i]}</Link></li>)
      })
    
      return listItems
    }

    render() {
        return (
          <div id="index_page">
            <div id="index_content">
              <div className="content_middle">
                <div id="logo_container">
                  <StaticImage
                    src="../images/logo_white.svg"
                    alt="Simon's Pictures"
                    placeholder="none"
                    layout="fullWidth"
                    id="logo"
                  />
                </div>
              </div>
              <ul className="nav_links index">
                {this.navLinks()}
              </ul>
            </div>
          </div>
        )
    }
}

