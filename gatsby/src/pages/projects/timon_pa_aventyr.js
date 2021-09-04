import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
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
Volutpat ac tincidunt vitae semper quis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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

const SPREADS = [
  <StaticImage
    src="https://drive.google.com/uc?export=view&id=1O3-8r_YcagpaeCZddTV9GFBdjeEIQ1Uu"
    alt=""
    placeholder="blurred"
    key={1}
  />,
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=12J6rlTY-4eFZI4hDPRUuzkwBG_ZT6K6K"
      alt=""
      placeholder="blurred"
      key={2}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1qL5UxHyQBLJ-uRmw0YdRaR97rGRrovws"
      alt=""
      placeholder="blurred"
      key={3}
    />
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1t7L3pIkZQcqsaDY9KBrpgrU2PKR9gfnf"
      alt=""
      placeholder="blurred"
      key={4}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1DpBID2YOqoL73QQRFQXY0JnSpQfeauuc"
      alt=""
      placeholder="blurred"
      key={5}
    />
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1bFA5U0Xlk-jh13t19fkmpFdSps8eL6Zm"
      alt=""
      placeholder="blurred"
      key={6}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1sRvZVPp_W_MLe5mQeHl_OVeZsv2WcXTu"
      alt=""
      placeholder="blurred"
      key={7}
    />
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1bT6svoc5yBdakxbQs1S_pi6LtVECSZ_o"
      alt=""
      placeholder="blurred"
      key={8}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1lO30nYtfMQ6mFw_QTteCKCetX_i65z0e"
      alt=""
      placeholder="blurred"
      key={9}
    />
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1GAbeHrno-xplhUN_eYerIovchiuT04lR"
      alt=""
      placeholder="blurred"
      key={10}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1aqVYVZjux6jI7mrw4har9Ch8cid2m2iL"
      alt=""
      placeholder="blurred"
      key={11}
    />
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=13Z_AeWIF3xvTeLlRXH6-61AoA2n2FpNr"
      alt=""
      placeholder="blurred"
      key={12}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1J_Zoy5a-QqPmNuHbnqkY_iMujngrzQ8E"
      alt=""
      placeholder="blurred"
      key={13}
    />
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1KTHwbTygrI0Ub12pIG99RM0lnDNf1Gjc"
      alt=""
      placeholder="blurred"
      key={14}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1w8rKK6UNZ4Q3oRbYBK5KFp6i8clx45Rs"
      alt=""
      placeholder="blurred"
      key={15}
    />
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1kBueEEg0nuHPqFwZ5qEQjPismZQOmeCe"
      alt=""
      placeholder="blurred"
      key={16}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1per2wLjpst6sfxMUdR4yy3W-StYurPoQ"
      alt=""
      placeholder="blurred"
      key={17}
    />
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1_D7ja5AaBIBq8igJQ0qIgnhQ0so3vfZG"
      alt=""
      placeholder="blurred"
      key={18}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1mGasI8390hbthLCXwRon09BzBDgUc8cF"
      alt=""
      placeholder="blurred"
      key={19}
    />
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1lfCfbIF7JSiCZTiNbj9UHBkVaw3sscET"
      alt=""
      placeholder="blurred"
      key={20}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1DNwckTV6H9fgQadF5YnEzqedm0mT6rAA"
      alt=""
      placeholder="blurred"
      key={21}
    />,
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1IY8pe4eXHK8gDbMtKZxh2voVlG2PSG0f"
      alt=""
      placeholder="blurred"
      key={22}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1p4kFzz-ECLSP3VBH7qlyGXPy2IyPUJk4"
      alt=""
      placeholder="blurred"
      key={23}
    />,
  ],
  <StaticImage
    src="https://drive.google.com/uc?export=view&id=1bwrPqvWv_2YIuwbv8iDxsiiXfGmjkZHq"
    alt=""
    placeholder="blurred"
    key={24}
  />
]

const timon_pa_aventyr = () => {

  return (
    <ProjectPage
      info={{title: "Timon På Äventyr", content: INFO}}
      type="book"
    >
      {SPREADS}
    </ProjectPage>
  )
}

export default timon_pa_aventyr
