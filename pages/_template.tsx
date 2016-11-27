import "../css/markdown-styles";

import * as React from "react";

export default class Index extends React.Component<{}, {}> {
	render(): JSX.Element {
		return (
			<div>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}
