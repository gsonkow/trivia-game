import { useState, useEffect } from "react";

export default function Grid({ answers, setUserClick, setPage }) {
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
            <button onClick={() => setPage("End")} id="areaB">
              {answer.incorrect_answers[0]}
            </button>
          </td>
          <td>
            <button onClick={() => setPage("End")} id="areaC">
              {answer.incorrect_answers[1]}
            </button>
          </td>
          <td>
            <button onClick={() => setPage("End")} id="areaD">
              {answer.incorrect_answers[2]}
            </button>
          </td>
        </tr>
      ))}
    </div>);
}
