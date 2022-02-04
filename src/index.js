import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Board } from './components/board/Board';
import { Status } from './components/status/Status';
import { Moves } from './components/moves/Moves';
import { calculateWinner } from './utils';
import './index.css';

export const Game = () => {
	const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXIsNext] = useState(true);
	const current = history[stepNumber];
	const winner = calculateWinner(current.squares);

	const moves = history.map((_, move) => {
		const desc = move ? 'Go to move #' + move : 'Go to the game start';
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{desc}</button>
			</li>
		);
	});

	let status = '';
	status = winner
		? 'Wygrywa: ' + winner
		: 'Następny gracz: ' + (xIsNext ? 'X' : 'O');

	const handleClick = (squareNumber) => {
		const oldHistory = history.slice(0, stepNumber + 1);
		const currentHistory = oldHistory[oldHistory.length - 1];
		const squares = currentHistory.squares.slice();

		if (calculateWinner(squares) || squares[squareNumber]) {
			return;
		}

		squares[squareNumber] = xIsNext ? 'X' : 'O';
		setHistory(oldHistory.concat([{ squares }]));
		setStepNumber(oldHistory.length);
		setXIsNext(!xIsNext);
	};

	const jumpTo = (step) => {
		setStepNumber(step);
		setXIsNext(step % 2 === 0);
	};

	return (
		<div className='game'>
			<div className='game-board'>
				<Board squares={current.squares} onClick={(i) => handleClick(i)} />
			</div>
			<div className='game-info'>
				<Status status={status} />
				<Moves moves={moves} />
			</div>
		</div>
	);
};

ReactDOM.render(<Game />, document.getElementById('root'));
