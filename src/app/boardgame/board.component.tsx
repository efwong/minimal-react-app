import * as React from 'react';

import { Square } from './square.component';

interface BoardProps {
	squares: string[];
	onClick: (i: number) => void;
}
// interface BoardState {
// 	squares: string[];
// 	xIsNext: boolean;
// }

export class Board extends React.Component<BoardProps, any> {
	public readonly columns = 3;
	// constructor(props: BoardProps) {
	// 	super(props);
	// 	this.state = {
	// 		squares: new Array(9),
	// 		xIsNext: true
	// 	};
	// }

	// public handleClick(index: number) {
	// 	const squares = this.state.squares;
	// 	const nextVal = this.state.xIsNext ? 'X' : 'O';
	// 	const updatedSquares = [...squares.slice(0, index), nextVal, ...squares.slice(index + 1, squares.length)];
	// 	this.setState({
	// 		squares: updatedSquares,
	// 		xIsNext: !this.state.xIsNext
	// 	});
	// 	console.log('state', this.state);
	// }

	/******************************
	 * Utility
	 *****************************/
	/**
	 * Get winner
	 * @param squares
	 */
	// public calculateWinner(squares: string[]): string {
	// 	for (let i = 0; i < this.winningMoves.length; i++) {
	// 		const [a, b, c] = this.winningMoves[i];
	// 		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
	// 			return squares[a];
	// 		}
	// 	}
	// 	return null;
	// }

	// public getStatus(): string {
	// 	const winner = this.calculateWinner(this.state.squares);
	// 	if (winner) {
	// 		return 'Winner: ' + winner;
	// 	} else {
	// 		return 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
	// 	}
	// }

	/*********************************
	 * Renderers
	 *********************************/
	renderSquare(i: number) {
		return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
	}

	renderBoard() {
		const boards = [];
		const rows = (this.props.squares.length > 0 ? this.props.squares.length : 1) / 3;
		for (let i = 0; i < rows; i++) {
			boards.push(
				<div className="board-row">
					{this.renderSquare(0 + this.columns * i)}
					{this.renderSquare(1 + this.columns * i)}
					{this.renderSquare(2 + this.columns * i)}
				</div>
			);
		}
		console.log('boards', boards);
		return <div className="board-container">{boards}</div>;
	}

	render() {
		return <div>{this.renderBoard()}</div>;
	}
}
