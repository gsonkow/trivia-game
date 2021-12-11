import { useState, useEffect } from "react";

export default function Grid({ answers, setUserClick, setPage, score, setScore }) {
  return (
    <div>
      {answers.map((answer) => (
        <div id="answerChoices" key={answer.answer}>
            <button onClick={() => {setScore(score + 1); setPage("Correct"); }}>
              {answer.correct_answer}
            </button>
            <button onClick={() => setPage("End")}>
              {answer.incorrect_answers[0]}
            </button>
            <button onClick={() => setPage("End")}>
              {answer.incorrect_answers[1]}
            </button>
            <button onClick={() => setPage("End")}>
              {answer.incorrect_answers[2]}
            </button>
        </div>
      ))}
    </div>);
}
