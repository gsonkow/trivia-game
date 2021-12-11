import { useEffect, useState } from "react";
import HomeScreen from "./HomeScreen";
import Game from "./Game";
import './App.css';
import Header from "./Header";

export default function App() {
  const [page, setPage] = useState("Home")
  const [gameType, setGameType] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
      {
        page == "Home" ? 
          <HomeScreen setPage={setPage} setGameType={setGameType}/> 
        : page == "Game" ?
          <div>
           <Game setPage={setPage} gameType={gameType} score={score} setScore={setScore}/>
          </div>
        : page == "End" ?
          <div className="endScreen">
           <h1 id="Title">Congrats</h1>
           <h2 id="score">Score: {score}</h2>
           <h2 id="score">Personal High Score: </h2>
           <button onClick={() => {setScore(0); setPage("Home"); }}>Home</button>
          </div>
        : page == "Correct" ?
          <div className="correctScreen">
          <Header score={score} setPage={setPage}/>
          <h1 id="Title">Good Job</h1>
          <button onClick={() => setPage("Game")}>Next Question</button>
          </div>
        : <div>Bad Page State</div>
      }
    </div>
  );
}