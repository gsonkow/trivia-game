export default function Header({score}) {
  return (
    <div className="gameHeader">
      <h3 id="triviaHeader"> Trivia </h3>
      <h3 id="scoreHeader"> Score: {score} </h3>
    </div>
  );
}
