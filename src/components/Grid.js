import { useState, useEffect } from "react";

export default function Grid({ answers, setUserClick }) {
  return (
    <div className="answerChoices">
      {answers.map((answer) => (
        <tr key={answer.answer}>
          <td>
            <button onClick={() => setUserClick("correct")} id="areaA">
              {answer.correct_answer}
            </button>
          </td>
          <td>
            <button onClick={() => setUserClick("incorrect")} id="areaB">
              {answer.incorrect_answers[0]}
            </button>
          </td>
          <td>
            <button onClick={() => setUserClick("incorrect")} id="areaC">
              {answer.incorrect_answers[1]}
            </button>
          </td>
          <td>
            <button onClick={() => setUserClick("incorrect")} id="areaD">
              {answer.incorrect_answers[2]}
            </button>
          </td>
        </tr>
      ))}
    </div>);
}
