import React, { Component } from 'react'
import { StaticImage } from "gatsby-plugin-image"

import NavBar from "../../components/nav_bar.js"
import PicGrid from "../../components/pic_grid"

export default class Projects extends Component {

  links() {
    return ([
      "timon_pa_aventyr",
      "twenty_nineteen_of_simon"
    ])
  }

  render() {
    return (
      <>
      <NavBar backLink="/"/>
      <main className="site_content">
          <h1 className="main_page_title">Projects</h1>
          <PicGrid links={this.links()}>
            <StaticImage
              src="https://drive.google.com/uc?export=view&id=1O3-8r_YcagpaeCZddTV9GFBdjeEIQ1Uu"
              alt=""
              placeholder="blurred"
              className="grid_item"
            />
            <StaticImage
              src="https://drive.google.com/uc?export=view&id=16ZEvX1F2AQYn0QGhIqXt_XrzF1btUxoe"
              alt=""
              placeholder="blurred"
              className="grid_item"
            />
          </PicGrid>
      </main>
      </>
    )
  }
  
}
