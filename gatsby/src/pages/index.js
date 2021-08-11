import * as React from "react"
import NavBar from "./components/nav_bar.js"
import "../styles/global.css"

const IndexPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <div>
       <title>Simon's Portfolio</title>
        <h1>Hello!</h1>
        <h2>My Name Is Simon.</h2>
        <p>This site is a work in progress right now,</p>
        <p>check out my instagram instead: <a href="https://www.instagram.com/simons.pictures/">@simons.pictures</a></p>
      </div>
    </>
  )
}

export default IndexPage
