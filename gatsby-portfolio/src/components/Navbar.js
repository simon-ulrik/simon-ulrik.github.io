import { Link } from 'gatsby'
import React from 'react'

export default function Navbar({location}) {

  let link_objects = [];
  let currentPath = location.pathname;
  const pages = [
    ["Home", "/"],
    ["About", "/about"],
    ["Work", "/work"]
  ];

  if (currentPath !== "/") {
    currentPath = currentPath.slice(0, -1); // "/about/" -> "/about"
  };

  for (let i = 0; i < pages.length; i++) {
    let className = ""
    const pageName = pages[i][0]
    const path = pages[i][1]

    if (path === currentPath) {
      className = "selected"
    }

    const LINK = <Link
      className={className}
      key={"main-nav_"+i}
      to={path}>{pageName}</Link>;
    link_objects.push(LINK)
  };

  return (
    <nav>
        <div className='links'>
            {link_objects}
        </div>
    </nav>
  )
}
