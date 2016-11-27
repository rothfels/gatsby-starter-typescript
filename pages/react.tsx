import { config } from "config";
import * as React from "react";
import * as Helmet from "react-helmet";

export default class ReactComponent extends React.Component<{}, { count: number }> {
	constructor() {
		super();
		this.state = { count: 0 };
	}

	handlePlusClick(): void {
		this.setState({ count: this.state.count + 1 });
	}

	handleMinusClick(): void {
		this.setState({ count: this.state.count - 1 });
	}

	render(): JSX.Element {
		return (
			<div>
				<Helmet
					title={`${config.siteTitle} | React.js components`}
					/>
				<h1>React.js components</h1>
				<h3>Counter example</h3>
				<p>{this.state.count}</p>
				<button onClick={() => this.handlePlusClick()}>+</button>
				<button onClick={() => this.handleMinusClick()}>-</button>
			</div>
		);
	}
}
