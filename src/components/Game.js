import "./Game.css";
import Grid from "./Grid.js";
import Image from "./Image.js";
import Question from "./Question.js";
import Header from "./Header.js";
export default function Game() {
  return (
    <div className="Game">
      <Header />
      <Question />
      <Image />
      <Grid />
    </div>
  );
}
