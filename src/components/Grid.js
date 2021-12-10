import { useState, useEffect } from "react";

export default function Grid({ answers, setUserClick, setPage, score, setScore }) {
  return (
    <div className="answerChoices">
      {answers.map((answer) => (
        <tr key={answer.answer}>
          <td>
<<<<<<< HEAD
            <button onClick={() => setScore(score++)/*setUserClick("correct")*/} id="areaA">
=======
            <button onClick={() => setPage("Correct")} id="areaA">
>>>>>>> c1811c4b6cf7f9410b80ad4a6c940cf3257e5183
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
