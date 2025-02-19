import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../../components/Layout"

export default function Work(props) {

  const currentPath = props.location.pathname;
  let link_objects = [];
  const pages = [
    ["Enclosed Space", "enclosed-space"],
    // ["Alla pizzerior i Göteborg (exhibition)", "alla-pizzerior-i-goteborg-exhibition"],
    // ["Närmre dig", "narmre-dig"],
    // ["A year in 27.7 seconds", "a-year-in-27_7-seconds"]
  ];

  for (let i = 0; i < pages.length; i++) {
      const pageName = pages[i][0]
      const path = pages[i][1]
  
      const LINK = <Link
        key={"work-nav_"+i}
        to={currentPath+path}>{pageName}</Link>;
      link_objects.push(LINK)
  };

  return (
    <Layout location={props.location}>
      <section>
        <div className="links">
          {link_objects}
        </div>
      </section>
    </Layout>
  )
}
