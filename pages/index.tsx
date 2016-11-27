import { config } from "config";
import { prefixLink } from "gatsby-helpers";
import * as React from "react";
import * as Helmet from "react-helmet";
import { Link } from "react-router";

export default class Index extends React.Component<{}, {}> {
	render(): JSX.Element {
		return (
			<div>
				<Helmet title={config.siteTitle} />
				<ul>
					<li>
						<Link to={prefixLink("/react/")}>React component</Link>
					</li>
				</ul>
			</div>
		);
	}
}
