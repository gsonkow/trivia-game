export default function IncorrectTwo({ answers, setPage }) {
    return (
      <div>
          {answers.map((answer) => (
            <div id="answerChoices" key={answer.answer}>
                <button onClick={() => {
                  setPage("End")
                }}>
                    {answer.incorrect_answers[1]}
                </button>
            </div>
          ))}
      </div>
    );
  }