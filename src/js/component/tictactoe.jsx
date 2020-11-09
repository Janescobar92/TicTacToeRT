import React, { useState } from "react";

import PropTypes from "prop-types";

const Square = props => (
	<button className="cell-board-game" onClick={props.onClick}>
		{props.value}
	</button>
);

const Board = ({ squares, onClick }) => (
	<div className="grid-board-game">
		{squares.map((square, i) => (
			<Square key={i} value={square} onClick={() => onClick(i)} />
		))}
	</div>
);
export const Game = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = i => {
		const boardCopy = [...board];
		if (winner || boardCopy[i]) return;
		boardCopy[i] = turn ? "X" : "O";
		setBoard(boardCopy);
		setTurn(!turn);
	};

	const renderMoves = () => (
		<button onClick={() => setBoard(Array(9).fill(null))}>Restart</button>
	);

	return (
		<>
			<Board squares={board} onClick={handleClick} />
			<div className="game-styling">
				<p>
					{winner
						? "Winner: " + winner
						: "Next Player: " + (turn ? "X" : "O")}
				</p>
				{renderMoves()}
			</div>
		</>
	);
};

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}
Square.propTypes = {
	value: PropTypes.string,

	onClick: PropTypes.func
};
