import "../css/App.css"
import React from "react";
import BackgroundVideo from "./backgroundVideo";
import music from "../mediaFiles/ambience.mp3";
import {Howl} from "howler";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./page4"


let sound1;
sound1 = new Howl({
    src: [music], loop: true});


export default function PressToEnter(){
    const [buttonPressed, setButtonPressed] = React.useState(false);
    const [animHelper, setAnimHelper] = React.useState(false);


    const handleChange = () => {
        console.log("Play!")
        sound1.play();
        setTimeout(function (){setButtonPressed(!buttonPressed)}, 2000);
        setTimeout(function (){setAnimHelper(!animHelper)}, 7000)
    }
        return(
            <div>
            <div className={"backgroundVideo"+animHelper}>
                <BackgroundVideo/>
                <Page1/>
                <Page2/>
                <Page4/>
                <Page3/>
            </div>
            <div className={"menuContainer"+buttonPressed+animHelper}>
                <div className={"enterTitle"+buttonPressed+animHelper}>Open me!</div>
                <button className={"enterButton"+buttonPressed+animHelper} onClick={handleChange}></button>
            </div>
            </div>
        );
}
