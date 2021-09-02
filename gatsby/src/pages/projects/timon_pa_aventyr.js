import * as React from "react"
import ProjectPage from '../../templates/project_page.js'

const INFO = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Sed pulvinar proin gravida hendrerit lectus.
Dui vivamus arcu felis bibendum.
Massa id neque aliquam vestibulum morbi.
Quis viverra nibh cras pulvinar mattis nunc sed.
Metus vulputate eu scelerisque felis imperdiet.
Maecenas ultricies mi eget mauris.
Vel pharetra vel turpis nunc eget lorem dolor sed viverra.
Donec ac odio tempor orci dapibus.
Ullamcorper eget nulla facilisi etiam dignissim.
Commodo ullamcorper a lacus vestibulum sed.
Volutpat ac tincidunt vitae semper quis.`

const timon_pa_aventyr = () => {
  return (
    <ProjectPage
      info={{title: "Timon På Äventyr", content: INFO}}
    >
      
    </ProjectPage>
  )
}

export default timon_pa_aventyr
