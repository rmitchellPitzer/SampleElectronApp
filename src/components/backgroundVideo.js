import grass from "../mediaFiles/grasshq.mp4";
import "../css/App.css"
import React from "react";
import ReactPlayer from "react-player";


export default function BackgroundVideo(){
    return (
        <div className="videoBackgroundContainer">
            <video
                autoPlay
                loop
                muted
                className="videoBackground">
                <source src={grass} type="video/mp4"/>
            </video>
        
        </div>
        );
}
