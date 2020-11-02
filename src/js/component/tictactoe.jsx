import React, { useState, Fragment } from "react";

import PropTypes from "prop-types";

const Square = props => {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
};

const Grid = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [squaresCopy] = useState([]);
	const [player, setPlayerNext] = useState(true);
	const [turn, setTurn] = useState(" X");
	let XandOSettingFunction = i => {
		if (squares[i] == null) {
			setSquares(squares.slice());
			if (player == true) {
				squaresCopy[i] = "X";
				setSquares(squaresCopy);
				setPlayerNext(false);
				setTurn(" O");
			} else {
				squaresCopy[i] = "O";
				setSquares(squaresCopy);
				setPlayerNext(true);
				setTurn(" X");
			}
		}
	};
	let renderSquare = i => {
		return (
			<Square
				value={squares[i]}
				onClick={() => {
					XandOSettingFunction(i);
				}}
			/>
		);
	};
	let status = "Next player:" + turn;
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
				<div>{/*status*/}</div>
				{/* <ol>{ todo }</ol> */}
			</div>
		</div>
	);
};
Square.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func
};
