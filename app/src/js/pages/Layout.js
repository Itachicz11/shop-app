import React from "react";

import Header from "./Header";

export default class Layout extends React.Component {

	render() {
		const { location } = this.props
		return (
			<div>
				<Header location={location} />
				<div class="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}