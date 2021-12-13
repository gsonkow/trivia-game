export default function Correct({ answers, setPage, score, setScore }) {
    return (
      <div>
          {answers.map((answer) => (
            <div id="answerChoices" key={answer.answer}>
                <button onClick={() => {
                  setScore(score + 1);
                  setPage("Correct");
                }}>
                    {answer.correct_answer}
                </button>
            </div>
          ))}
      </div>
    );
  }