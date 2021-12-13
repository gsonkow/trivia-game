export default function IncorrectThree({ answers, setPage }) {
    return (
      <div>
          {answers.map((answer) => (
            <div id="answerChoices" key={answer.answer}>
                <button onClick={() => {
                  setPage("End")
                }}>
                    {answer.incorrect_answers[2]}
                </button>
            </div>
          ))}
      </div>
    );
  }