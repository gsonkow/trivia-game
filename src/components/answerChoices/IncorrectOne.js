export default function IncorrectOne({ answers, setPage }) {
    return (
      <div>
          {answers.map((answer) => (
            <div id="answerChoices" key={answer.answer}>
                <button onClick={() => {
                  setPage("End")
                }}>
                    {answer.incorrect_answers[0]}
                </button>
            </div>
          ))}
      </div>
    );
  }