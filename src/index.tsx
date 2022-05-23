import { useState } from "react";
import ReactDOM from "react-dom";
import { Board } from "./components/board/Board";
import { Status } from "./components/status/Status";
import { Moves } from "./components/moves/Moves";
import { calculateWinner } from "./utils";
import "./index.scss";

export const Game = () => {
	const { history, current, status, handleClick, handleGoToMove } = useGame();

	const moves = history.map((_, move: number) => {
		const desc = move ? "Go to move #" + move : "Go to the game start";
		return (
			<li key={move}>
				<button onClick={() => handleGoToMove(move)}>{desc}</button>
			</li>
		);
	});

	return (
		<div className="game">
			<div className="game__board">
				<Board squares={current.squares} onClick={(i) => handleClick(i)} />
			</div>
			<div className="game__info">
				<Status status={status} />
				<Moves moves={moves} />
			</div>
		</div>
	);
};

const useGame = () => {
	const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXIsNext] = useState(true);
	const current = history[stepNumber];
	const winner = calculateWinner(current.squares);

	let status = "";
	status = winner ? "Wins: " + winner : "Next player: " + (xIsNext ? "X" : "O");

	const handleClick = (squareNumber: number) => {
		const oldHistory = history.slice(0, stepNumber + 1);
		const currentHistory = oldHistory[oldHistory.length - 1];
		const squares = currentHistory.squares.slice();

		if (calculateWinner(squares) || squares[squareNumber]) {
			return;
		}

		squares[squareNumber] = xIsNext ? "X" : "O";
		setHistory(oldHistory.concat([{ squares }]));
		setStepNumber(oldHistory.length);
		setXIsNext(!xIsNext);
	};

	const handleGoToMove = (step: number) => {
		setStepNumber(step);
		setXIsNext(step % 2 === 0);
	};

	return { history, current, status, handleClick, handleGoToMove } as const;
};

ReactDOM.render(<Game />, document.getElementById("root"));
