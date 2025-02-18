import * as React from "react"
import Layout from "../../components/Layout"

export default function Work(props) {

  const pages = [
    ["Enclosed Space", "enclosed-space"],
    ["Alla pizzerior i Göteborg (exhibition)", "alla-pizzerior-i-goteborg-exhibition"],
    ["Närmre dig", "narmre-dig"]
    ["A year in 27.7 seconds", "a-year-in-27_7-seconds"]
  ];

  return (
    <Layout location={props.location}>
      <section>
        <div>
          <h1>work!</h1>
          <p>lorum ipsum</p>
        </div>
      </section>
    </Layout>
  )
}
