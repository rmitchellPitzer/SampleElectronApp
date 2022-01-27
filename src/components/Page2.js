import "../css/App.css"
import React from "react";

export default function Page2(){
    return(
        <div className="page2">
            <div className="page2title">A bit of explanation</div>
            <div className="page2Description1">
                A few months ago I wanted to send a card to someone, but also
                wanted it to be unique. Using Electron.js, which creates
                a chromium instance inside an application, I created a one of
                a kind card, which you're now reading the result of!
            </div>
            <div className="page2Description2">Other apps made in electron include
            Discord, Slack, Spotify, and the text editor Atom. It's hard to tell on the
            white background, but at the top of the page is a small transparency layer.
            Clicking on this and dragging around will drag the application window.</div>
            <div className="page2Description3">Pressing ctrl+shift+i will open dev tools, showing
            this is running on chromium. Scroll down to see where I went to college!</div>
        </div>
    )}
