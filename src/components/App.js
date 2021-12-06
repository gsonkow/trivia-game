import { useEffect, useState } from "react";
import HomeScreen from "./HomeScreen";
import Game from "./Game";
import './App.css';
import EndScreen from "./EndScreen";

export default function App() {
  const [page, setPage] = useState("Home")



  // TODO: add logic
  return (
    <div>
      <button onClick={() => setPage("Game")}>game</button>
      <button onClick={() => setPage("End")}>end</button>
      {
        page == "Home" ? 
          <HomeScreen/> 
        : page == "Game" ?
          <Game/>
        : page == "End" ?
          <EndScreen/>
        : <div>Bad Page State</div>
      }
    </div>
  );
}