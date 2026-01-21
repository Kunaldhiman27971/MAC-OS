import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import './MacWindow.scss';

const MacWindow = ({
  children,
  width = "60vw",
  height = "70vh",
  windowName,
  setWindowState
}) => {

  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Rnd
      size={
        isFullscreen
          ? { width: "100vw", height: "100vh" }
          : { width, height }
      }
      position={
        isFullscreen
          ? { x: 0, y: 0 }
          : { x: 200, y: 100 }
      }
      enableResizing={!isFullscreen}
      disableDragging={isFullscreen}
      bounds="window"
    >
      <div className={`window ${isFullscreen ? "fullscreen" : ""}`}>
        <div className="nav">
          <div className="dots">
  <div
    onClick={() =>
      setWindowState(state => ({ ...state, [windowName]: false }))
    }
    className="dot red"
    data-symbol="×"
  />

  <div
    onClick={() =>
      setWindowState(state => ({ ...state, [windowName]: false }))
    }
    className="dot yellow"
    data-symbol="–"
  />

  <div
    onClick={() => setIsFullscreen(prev => !prev)}
    className="dot green"
    data-symbol="⤢"
  />
</div>


          <div className="title">
            <p>kunaldhiman - zsh</p>
          </div>
        </div>

        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
