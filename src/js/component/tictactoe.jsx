import React from "react";

import PropTypes from "prop-types";

const Square = props => {
	return <button clasNAme="square">{props.value}</button>;
};

const Grid = () => {
	let renderSquare = i => {
		return <Square value={i} />;
	};

	const status = "Next player: X";
	return (
		<div>
			<div className="status">{status}</div>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
};

export const Game = () => {
	return (
		<div className="game">
			<div className="game-grid">
				<Grid />
			</div>
			<div>
				<div>{/* status */}</div>
				<ol>{/* todo */}</ol>
			</div>
		</div>
	);
};

Square.propTypes = {
	value: PropTypes.number
};
