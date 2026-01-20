import React from 'react';
import { Rnd } from 'react-rnd';
import './MacWindow.scss';
const MacWindow = ({children}) => {
    return (
        <Rnd 
        default={{
            height:"60vh",
            width:"40vw",
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
