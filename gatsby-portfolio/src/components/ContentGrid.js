import React from 'react'
import '../styles/content-grid.sass'

export default function ContentGrid(props) {
    const data = props.data.allDataJson.nodes[0][props.title]
    let content = []

    function changeImage(e, imgLinks) {
        if (e.target.currentSrc === imgLinks.front) {
            e.target.src = imgLinks.back
        } else {
            e.target.src = imgLinks.front
        }
    };

    for (const i in data) {
        const imgLinks = {
            front: data[i].frontImg,
            back: data[i].backImg
        }

        let info = []

        if (props.title === 'digicams') {
            info.push(<div key={`info ${i}`}>
                <h1>{data[i].name}</h1>
                <p>{data[i].brand}</p>
            </div>)
        }

        content.push(
            <div className="content-box" key={i}>
                <div
                    className='img-container'
                    onMouseEnter={(e) => {changeImage(e, imgLinks);}}
                    onMouseLeave={(e) => {changeImage(e, imgLinks);}}
                >
                    <img src={imgLinks.front} alt={data[i].name}></img>
                    <img src={imgLinks.back} alt={data[i].name} className='not-displayed'></img>
                </div>
                { info }
            </div>
        )
    }

    return (
        <div className="content-grid">
            {content}            
        </div>
    )
}
