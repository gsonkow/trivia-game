import { useEffect, useState } from "react";
import HomeScreen from "./HomeScreen";
import Game from "./Game";
import './App.css';

export default function App() {
  const [page, setPage] = useState("Home")
  const [gameType, setGameType] = useState(0);

  return (
    <div>
      <button onClick={() => setPage("Game")}>game</button>
      <button onClick={() => setPage("End")}>end</button>
      {
        page == "Home" ? 
          <HomeScreen setPage={setPage} setGameType={setGameType}/> 
        : page == "Game" ?
          <div>
           <Game setPage={setPage} gameType={gameType}/>
          </div>
        : page == "End" ?
          <div className="endScreen">
           <h1 id="congrats">Congrats</h1>
           <h2 id="score">Score: </h2>
           <h2 id="score">Personal High Score: </h2>
            <button onClick={() => setPage("Home")}>Home</button>
            <button>Play Again</button>
          </div>
        : page == "Correct" ?
          <div>
          <h1>Good Job</h1>
          <button onClick={() => setPage("Game")}>Next Question</button>
          </div>
        : <div>Bad Page State</div>
      }
    </div>
  );
}