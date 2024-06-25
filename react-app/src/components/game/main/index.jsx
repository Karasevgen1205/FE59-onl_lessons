import { useState } from "react";
import { Board } from "../board";
import { calcWinner } from "../helper";
import "./styles.scss";

export const Game = () => {
  const [history, setHistory] = useState([
    { squares: new Array(9).fill(null) },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  console.log(history);

  const handleClick = (id) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const currentStap = history[history.length - 1]; //{ squares: new Array(9).fill(null) },
    const squares = [...currentStap.squares];

    if (calcWinner(squares) || squares[id]) {
      console.log("победил ", xIsNext ? "O" : "X");
      return;
    }

    squares[id] = xIsNext ? "X" : "O";

    setHistory([...newHistory, { squares }]);
    setStepNumber(newHistory.length);
    setXIsNext((prevState) => !prevState);
  };

  return (
    <section className="game">
      <div className="container">
        <div className="game__wrapper">
          <Board
            squares={history[stepNumber].squares}
            handleClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};
