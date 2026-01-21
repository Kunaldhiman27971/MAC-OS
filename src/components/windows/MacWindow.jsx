import React from 'react';
import { Rnd } from 'react-rnd';
import './MacWindow.scss';
const MacWindow = ({children,width="40vw",height="70vh"}) => {
    return (
        <Rnd 
        default={{
            height:height,
            width:width,
            x:200,
            y:100
        }}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>

                    <div className="title">
                       <p>kunaldhiman - zsh </p>
                    </div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow;
