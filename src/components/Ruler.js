import React from "react";
import RulerSection from "./RulerSection";


export default function Ruler({minVal,maxVal}){
    const rulerSectionArr = [];
    for (let i=maxVal;i>=minVal;i -= 10){
        rulerSectionArr.push(<RulerSection sectionNumber = {i} />)
    }
    return (
        <section id="ruler">
            {rulerSectionArr}
        </section>        
    )
}