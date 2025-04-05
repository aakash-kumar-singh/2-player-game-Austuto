import React from "react";
import { useState } from "react";
import "../App.css";
const Game = () => {
  const [state, setState] = useState("0");
  return (
    <div>
      <h1>
        Player {state} turn{" "}
        <button
          className="btn"
          onClick={setInterval(() => {
            if (state === "0") {
              setState("X");
            }
            if (state === "X") {
              setState("0");
            }
          }, 2000)}
        >
          Click Here
        </button>
      </h1>
      <div className="game">
        <div className="outer">
          <div className="box">
            <h1>0</h1>
          </div>
          <div className="box">
            <h1>X</h1>
          </div>
          <div className="box">
            <h1>X</h1>
          </div>
        </div>
        <div className="outer">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="outer">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
      <input type="button" value="Reset" className="btn"></input>
    </div>
  );
};

export default Game;
