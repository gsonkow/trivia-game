import "./Game.css";
import { useState, useEffect } from "react";
import Grid from "./Grid.js";
import Image from "./Image.js";
import Question from "./Question.js";
import Header from "./Header.js";

export default function Game({ setPage, gameType }) {
  const [mistake, setMistake] = useState(false);
  const [score, setScore] = useState(0);
  const [token, setToken] = useState("");
  const [questionData, setQuestionData] = useState("");
  const [userClick, setUserClick] = useState([]);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=1&category=${gameType}&type=multiple`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => setAnswers(response.results));
  }, []);
  // useEffect(() => {
  //   fetch('https://opentdb.com/api_token.php?command=request')
  //     .then((r) => r.json())
  //     .then((r) => setQuestionData(r))
  //     .catch((e) => setQuestionData(null));

  //   var url = `https://opentdb.com/api.php?amount=1&category=${gameType}&type=multiple&token=${token}`
  // }, [gameType, token])

  return (
    <div className="Game">
      <button onClick={() => setPage("Home")}>Home</button>
      <Header score={score}/>
      <Question answers={answers} />
      <Image />
      <Grid answers={answers} setUserClick={setUserClick} setPage={setPage} score={score} setScore={setScore}/>
    </div>
  );
}
