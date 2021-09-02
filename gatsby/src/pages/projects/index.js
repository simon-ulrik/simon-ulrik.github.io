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
              src="https://drive.google.com/uc?export=view&id=1pFIi8A1zVnY6x4V3tO-5-U44kHVrF1ed"
              alt=""
              placeholder="blurred"
              className="grid_item"
            />
            <StaticImage
              src="https://images.wagwalkingweb.com/media/articles/care/why-is-my-dog-yawning-and-licking-his-lips/why-is-my-dog-yawning-and-licking-his-lips.jpg"
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
