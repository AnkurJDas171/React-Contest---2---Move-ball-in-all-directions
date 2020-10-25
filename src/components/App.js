import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = React.useState(false);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [ballPosition, setBallPosition] = React.useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    let restX = 0;
    let restY = 0;
    let resetRanderBall = false;
    let ballPositionLeft = 0;
    let ballPositionRight = 0;

    setRenderBall(resetRanderBall);
    setX(restX);
    setY(restY);
    setBallPosition({ left: ballPositionLeft, right: ballPositionRight });

    console.log(renderBall, x, y, ballPosition);
  };


  const ballMovementHandel = (event) =>{

    if(event.keyCode === 39){//right

      let newX = x + 5;
      setX(newX);
      setBallPosition({left:`${newX}px`,right:`${y}px`});

    }
    else if(event.keyCode === 40){//down

      let newY = y + 5;
      setY(newY);
      setBallPosition({left:`${x}px`,right:`${newY}px`});

    }
    else if(event.keyCode === 38){//up

      let newY = y - 5;
      setY(newY);
      setBallPosition({left:`${x}px`,right:`${newY}px`});

    }
    else if(event.keyCode === 37){//left
   
      let newX = x - 5;
      setX(newX);
      setBallPosition({left:`${newX}px`,right:`${y}px`});

    }


  };

  const renderChoice = () => {

    document.addEventListener("keydown", (event)=>ballMovementHandel(event));

  };
  
  const start = () => {
    let newRenderBall = true;
    setRenderBall(newRenderBall);
  };

  return (
    <div className="playground">
      {!renderBall && (
        <button onClick={start} className="start">
          Start
        </button>
      )}

      {renderBall && <div className="ball" style={{left:ballPosition.left,top:ballPosition.right}}></div>}

      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
