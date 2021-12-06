import { useEffect, useState } from "react";
import HomeScreen from "./HomeScreen";
import Game from "./Game";
import './App.css';

export default function App() {
  const [page, setPage] = useState("Home");

  //home screen w/ all the game options and nav
  // TODO: change nav to own file?
  // TODO: change game options to own file?
  // TODO: add logic
  return (
    <div>
      <button onclock={setPage("Game")}>game</button>
      {
        page == "Home" ? 
          <HomeScreen/> 
        : page == "Game" ?
          <Game/>
        : page == "End" ?
          <div></div>
        : <div>Bad Page State</div>
      }
    </div>
  );
}