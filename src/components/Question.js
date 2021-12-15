import "./App.css";
import { useEffect, useState } from "react";

export default function Question({ answers }) {
  return (
    <div className="Question">
      {answers.map((answer) => (
        <h1 key="Title" id="Title">
          {answer.question}
        </h1>
      ))}
    </div>
  );
}
