import { useEffect, useState } from "react";
import './App.css';


  //home screen w/ all the game options and nav
  // TODO: change nav to own file?
  // TODO: change game options to own file?
export default function HomeScreen({ setPage, setGameType }) {
    return (
    <div>
      <h1 id="Title">Welcome to Trivia!</h1>
      <div id="gameList">
        <h2>Pick a category:</h2>
        <button onClick={() => {
          setPage("Game")
          setGameType(21)
          }}>Sports</button>
        <button onClick={() => {
          setPage("Game")
          setGameType(14)
          }}>Television</button>
        <button onClick={() => {
          setPage("Game")
          setGameType(15)
          }}>Video Games</button>
        <button onClick={() => {
          setPage("Game")
          setGameType(23)
          }}>History</button>       
        <button onClick={() => {
          setPage("Game")
          setGameType(27)
          }}>Animals</button>                   
      </div>
    </div>
    );
}