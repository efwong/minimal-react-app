import * as React from 'react';

export interface SquareProps {
	value: string;
	onClick: () => void;
}

export class Square extends React.Component<SquareProps, any> {
	render() {
		return (
			<button className="square" onClick={e => this.props.onClick()}>
				{this.props.value}
			</button>
		);
	}
}
