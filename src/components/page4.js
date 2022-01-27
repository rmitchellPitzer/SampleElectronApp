import "../css/App.css"
import React from "react";

import pitzerPhoto1 from '../mediaFiles/Pitzer1.jpg'
import muddPhoto1 from '../mediaFiles/Mudd1.jpg'
import muddPhoto2 from '../mediaFiles/Mudd2.jpg'
import muddPhoto3 from '../mediaFiles/Mudd3.jpg'
import pitzerPhoto2 from '../mediaFiles/Pitzer2.jpg'




export default function Page4(){
    
    return(
        <div className="page4">
            <div className="page41">
            <img src={pitzerPhoto1} className="pitzerPhoto1"/>
            <div className="page41Description">This is my school Pitzer...</div>
            </div>
            <div className="page42">
            <img src={muddPhoto1} className="muddPhoto1"/>
            <div className="page42Description">But most of the classes I take are at Mudd.</div>
            </div>
            <div className="page43">
            <img src={muddPhoto2} className="muddPhoto2"/>
            <div className="page43Description">This is the new cs building.</div>
            </div>
            <div className="page44">
            <img src={muddPhoto3} className="muddPhoto3"/>
            <div className="page44Description">I actually have another project on this building!</div>
            </div>
            <div className="page45">
            <img src={pitzerPhoto2} className="pitzerPhoto2"/>
            </div>
        </div>
    )
}