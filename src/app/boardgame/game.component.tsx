import * as React from 'react';

import { Board } from './board.component';

interface GameProps {}
interface GameHistory {
	squares: string[];
}
interface GameState {
	history: GameHistory[];
	stepNumber: number;
	xIsNext: boolean;
}
export class Game extends React.Component<GameProps, GameState> {
	public readonly winningMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

	constructor(props: GameProps) {
		super(props);
		this.state = {
			history: [
				{
					squares: new Array(9)
				}
			],
			stepNumber: 0,
			xIsNext: true
		};
	}

	/******************************
	 * Events
	 *****************************/
	public handleClick(i: number) {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const squares = current.squares.slice();
		if (this.calculateWinner(squares) || squares[i]) {
			return;
		}

		const nextVal = this.state.xIsNext ? 'X' : 'O';
		const updatedSquares = [...squares.slice(0, i), nextVal, ...squares.slice(i + 1, squares.length)];
		this.setState({
			history: [
				...history,
				{
					squares: updatedSquares
				}
			],
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext
		});
	}

	public jumpTo(stepNumber: number) {
		console.log('jump', stepNumber);
		this.setState({
			stepNumber: stepNumber,
			xIsNext: stepNumber % 2 === 0
		});
	}

	/******************************
	 * Generators
	 *****************************/
	public getMoves() {
		const moves = this.state.history.map((step, move) => {
			const desc = move ? 'Go to move #' + move : 'Go to game start';
			return (
				<li>
					<button onClick={() => this.jumpTo(move)}>{desc}</button>
				</li>
			);
		});
		return moves;
	}

	/******************************
	 * Utility
	 *****************************/
	/**
	 * Get winner
	 * @param squares
	 */
	public calculateWinner(squares: string[]): string {
		for (let i = 0; i < this.winningMoves.length; i++) {
			const [a, b, c] = this.winningMoves[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	}

	public getStatus(history: GameHistory): string {
		const winner = this.calculateWinner(history.squares);
		if (winner) {
			return 'Winner: ' + winner;
		} else {
			return 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const status = this.getStatus(current);
		const moves = this.getMoves();
		return (
			<div className="game">
				<div className="game-board">
					<Board squares={current.squares} onClick={i => this.handleClick(i)} />
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}
