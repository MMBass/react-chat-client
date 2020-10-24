import React from 'react';

import './InfoBar.css';

const InfoBar = ({room})=>{

    //todo add icons
 return (<div className="infoBar">
            <div className="leftInnerContainer">
                <h2>. </h2>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/">X</a>
            </div>
        </div>)
}

export default InfoBar;