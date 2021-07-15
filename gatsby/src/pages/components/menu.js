import React from "react"

export default function Menu(props) {
  return (
    <nav>
        <h2>Menu!!</h2>
        <div id="nav_btns">
            <div id="toggle_btn"></div>
            <h1 id="menu_title">{props.title} då</h1>
        </div>
        <ul id="nav_links">
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