import "./App.css";
import { useEffect, useState } from "react";

export default function EndScreen() {
  return (
    <div className="endScreen">
      <h1 id="congrats">Congrats</h1>
      <h2 id="score">Score: </h2>
      <h2 id="score">Personal High Score: </h2>
      <button>Home</button>
      <button>Play Again</button>
    </div>
  );
}
