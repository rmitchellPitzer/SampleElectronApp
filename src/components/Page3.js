
import grass2 from '../mediaFiles/grasshq2.mp4'
import React from "react";


export default function Page3(){
    return(
        <div className="page3">
            <div className="page3title">That's my electron app!</div>
            <div className="page3Description1">
            For more information go to my Github rmitchellPitzer!
            </div>
            <div className="mountains">
            <video
                autoPlay
                loop
                muted
                className="videoBackground">
                <source src={grass2} type="video/mp4"/>
            </video>
        
        </div>
            <span className="name">Ryder</span>
        </div>
    )}