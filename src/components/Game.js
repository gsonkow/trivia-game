import "./Game.css";
import { useState, useEffect } from "react";
import Grid from "./Grid.js";
import Image from "./Image.js";
import Question from "./Question.js";
import Header from "./Header.js";
export default function Game({ setPage, gameType }) {
  

  return (
    <div className="Game">
      <button onClick={() => setPage("Home")}>Home</button>
      <Header />
      <Question />
      <Image />
      <Grid />
    </div>
  );
}
