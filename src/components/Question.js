import "./Game.css";
import { useEffect, useState } from "react";

export default function Question({ answers }) {
  return (
    <div className="Question">
      {answers.map((answer) => (
        <h1>{answer.question}</h1>
      ))}
    </div>
  );
}
