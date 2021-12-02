import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className="Header scroll">
            <video src="/video.mp4" autoPlay muted loop></video>
            <div className="HeaderTitle">
                <span>현재의 <span style={{color:"rgb(220,0,0)"}}>기온</span>이 미래에는?</span>
            </div>
        </div>
    )
}

export default Header;