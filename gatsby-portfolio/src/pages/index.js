import * as React from "react"
import Layout from "../components/Layout"

export default function Home(props) {
  return (
    <Layout location={props.location}>
      <section>
        <div>
          <h1>Home!</h1>
          <p>lorum ipsum</p>
        </div>
      </section>
    </Layout>
  )
}
