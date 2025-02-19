import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"

export default function EnclosedSpace(props) {

  // let image_objects = [
    
  //   ];

  // for (let i = 0; i < 11; i++) {
  //   let src = "../../images/enclosed-space/enclosed-space_web_"
  //   if (i !== 10) {
  //     src = src + "0"
  //   }

  //   src = src+i+".jpg"
  //   console.log(src)
  //   image_objects.push(<GatsbyImage src={src} alt="enclosed space" key={"enclosed-space_"+i} />)
  // }

  return (
    <Layout location={props.location}>
      <section>
        <div>
          <h1>Enclosed Space</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/M_bo-rwfu5o?si=-Hcen-ooMRkNsheW" title="Enclosed Space Video" allowFullScreen></iframe>
          <div>
            <StaticImage height={200} src={"../../images/enclosed-space/enclosed-space_web_00.jpg"} alt="enclosed-space_web_00" />
            <StaticImage height={200} src={"../../images/enclosed-space/enclosed-space_web_01.jpg"} alt="enclosed-space_web_01" />
            <StaticImage height={200} src={"../../images/enclosed-space/enclosed-space_web_02.jpg"} alt="enclosed-space_web_02" />
            <StaticImage height={200} src={"../../images/enclosed-space/enclosed-space_web_03.jpg"} alt="enclosed-space_web_03" />
            <StaticImage height={200} src={"../../images/enclosed-space/enclosed-space_web_04.jpg"} alt="enclosed-space_web_04" />
            <StaticImage height={200} src={"../../images/enclosed-space/enclosed-space_web_05.jpg"} alt="enclosed-space_web_05" />
            <StaticImage height={200} src={"../../images/enclosed-space/enclosed-space_web_06.jpg"} alt="enclosed-space_web_06" />
            <StaticImage height={200} src={"../../images/enclosed-space/enclosed-space_web_07.jpg"} alt="enclosed-space_web_07" />
            <StaticImage height={200} src={"../../images/enclosed-space/enclosed-space_web_08.jpg"} alt="enclosed-space_web_08" />
            <StaticImage height={200} src={"../../images/enclosed-space/enclosed-space_web_09.jpg"} alt="enclosed-space_web_09" />
            <StaticImage height={200} src={"../../images/enclosed-space/enclosed-space_web_10.jpg"} alt="enclosed-space_web_10" />
          </div>
        </div>
      </section>
    </Layout>
  )
}