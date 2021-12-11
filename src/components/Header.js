export default function Header({score, setPage}) {
  return (
    <div className="gameHeader">
      <button onClick={() => setPage("Home")}>Home</button>
      <h3 id="scoreHeader"> Score: {score} </h3>
    </div>
  );
}
