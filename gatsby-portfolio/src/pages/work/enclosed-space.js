import * as React from "react"
import Layout from "../../components/Layout"

export default function EnclosedSpace(props) {

  return (
    <Layout location={props.location}>
      <section>
        <div>
          <h1>EnclosedSpace</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/M_bo-rwfu5o?si=-Hcen-ooMRkNsheW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
    </Layout>
  )
}