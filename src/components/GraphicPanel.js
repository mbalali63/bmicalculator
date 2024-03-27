import React from "react";
import Ruler from "./Ruler";
import weightScaleImage from "./../assets/original-a7a05b4d59b17d5f490e18c7d287f82f.jpg"
import manImage from "./../assets/j5f1_6qst_230512.jpg"
import womanImage from "./../assets/avqx_4p32_230512.jpg"



export default function GraphicPanel(){
    return (
        <section id="graphic-panel">
            <div id="body-symobol">
                <img src={manImage}/>
            </div>
            <div>
                <Ruler minVal={80} maxVal={110} />
            </div>
            <div id="weight-scale">
                <img src={weightScaleImage}/>
            </div>
        </section>
    )
}