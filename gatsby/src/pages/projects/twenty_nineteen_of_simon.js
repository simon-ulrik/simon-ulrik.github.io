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
    src="https://drive.google.com/uc?export=view&id=1xE3f-qpix27tDPfC7MmBtdL3MDQVTcem"
    alt=""
    placeholder="blurred"
    key={1}
  />,
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=18W4nGu-ueZB5uYdsZKlfjarPwVsWG7__"
      alt=""
      placeholder="blurred"
      key={2}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1kyO6gQV9MwxNUWhvyfKRSu2FilKMNQ3k"
      alt=""
      placeholder="blurred"
      key={3}
    />
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1YO8XZEREauVejuNGMFpJovPbGLCHFwIf"
      alt=""
      placeholder="blurred"
      key={4}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1mRnbPH9FE7_OeH9jM9CONdLiRNEmu2Pl"
      alt=""
      placeholder="blurred"
      key={5}
    />
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1mvaXKaq8Ma-yGr8NFNujWl2mYEIVtIUl"
      alt=""
      placeholder="blurred"
      key={6}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1fzIElxaqS-Obkl0SXUqGIb_zkI__mgvO"
      alt=""
      placeholder="blurred"
      key={7}
    />
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1Vpz5VzsLRWFSrSQp9OEmB2UyfSf2vtDu"
      alt=""
      placeholder="blurred"
      key={8}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1zUto3tGXwqxTNVRewQxeeUT4QmL0jfvK"
      alt=""
      placeholder="blurred"
      key={9}
    />
  ],
  [
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1l1gZLY1Jh2fXc7wqZ6msoEpij9YcN0k0"
      alt=""
      placeholder="blurred"
      key={10}
    />,
    <StaticImage
      src="https://drive.google.com/uc?export=view&id=1a-lydvM6nqf1IJwLOCOhkGLhdaDMdzar"
      alt=""
      placeholder="blurred"
      key={11}
    />
  ],
  <StaticImage
    src="https://drive.google.com/uc?export=view&id=1Akng-qWLhTjjDgeOk2p6g8MbeumDvu9w"
    alt=""
    placeholder="blurred"
    key={12}
  />
]

const twenty_nineteen_of_simon = () => {
  return (
    <ProjectPage
      info={{title: "2019 OF SIMON", content: INFO}}
      type="book"
    >
      {SPREADS}
    </ProjectPage>
  )
}

export default twenty_nineteen_of_simon