import { useEffect, useState } from "react";
import './App.css';

export default function App() {
  const [game, setGame] = useState("");

  function switchToGame(thisGame) {
    //change to game screen w/ gamestate set to the user-selected game
    //setGame(thisGame).then()
  }

  //home screen w/ all the game options and nav
  // TODO: change nav to own file?
  // TODO: change game options to own file?
  // TODO: add logic
  return (
    <div>
      <h1>Welcome to Trivia!</h1>
      <h2>
        <button>Categories</button> 
        <button>About Us</button>
      </h2>
      <h3>Pick a category:</h3>
      <div id="gameList">
        <button>Animals</button>
        <button>Movies</button>
      </div>
    </div>
  );
}