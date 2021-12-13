import "./App.css";
import { useState, useEffect, useMemo } from "react";
import Question from "./Question.js";
import Header from "./Header.js";
import Correct from "./answerChoices/Correct.js";
import IncorrectOne from "./answerChoices/IncorrectOne.js";
import IncorrectTwo from "./answerChoices/IncorrectTwo.js";
import IncorrectThree from "./answerChoices/IncorrectThree.js";

export default function Game({ setPage, gameType, score, setScore }) {
  const [mistake, setMistake] = useState(false);
  const [token, setToken] = useState("");
  const [questionData, setQuestionData] = useState("");
  const [userClick, setUserClick] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [shuffle, setShuffle] = useState([]);
  var arr = [
    <Correct
      answers={answers}
      setPage={setPage}
      score={score}
      setScore={setScore}
    />,
    <IncorrectOne answers={answers} setPage={setPage} />,
    <IncorrectTwo answers={answers} setPage={setPage} />,
    <IncorrectThree answers={answers} setPage={setPage} />,
  ];

  function the_shuffle(arr) {
    setShuffle(
      arr
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  }
  
  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=1&category=${gameType}&type=multiple`;
    fetch(url)
        .then((response) => response.json())
        .then((response) => setAnswers(response.results));
  }, []);

  useEffect(() => {
    if (answers.length > 0) the_shuffle(arr);
  }, [answers]);

  return (
    <div className="Game">
    <Header score={score} setPage={setPage}/>
    <Question answers={answers} />
    {shuffle[0]}
    {shuffle[1]}
    {shuffle[2]}
    {shuffle[3]}
  </div>
  );

}
