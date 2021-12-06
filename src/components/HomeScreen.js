import { useEffect, useState } from "react";
import './App.css';


  //home screen w/ all the game options and nav
  // TODO: change nav to own file?
  // TODO: change game options to own file?
export default function HomeScreen() {
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