import React from "react";


export default function RulerSection({sectionNumber}){
    const sectionItems = [];
    for (let i=0;i<9;i++){
        sectionItems.push(i);
    }
    const listItems = sectionItems.map((index) => (index === 4) 
                        ? 
                            <li key={index.toString()}><div className="major-line"></div>{sectionNumber}</li>
                        :
                            <li key={index.toString()}><div className="minor-line"></div></li>
            
    )
    return (
        <section className="ruler-section">
            <ul>
                {listItems}
            </ul>
        </section>
    )
}