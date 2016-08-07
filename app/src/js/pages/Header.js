import React from "react";
import { Link } from "react-router";

export default class Header extends React.Component {
	render() {
		const { location } = this.props;
		const inventoryListClass = location.pathname === "/" ? "active" : "";
		const basketClass = location.pathname.match(/^\/basket/) ? "active" : "";
		const inventoryItemCreate = location.pathname.match(/^\/Inventory-item\/create/) ? "active" : "";

		return (
			<header>
				<nav class="navbar navbar-default">
					<div class="container">
						<ul class="nav navbar-nav">
							<li class={inventoryListClass}><Link to="/">Inventory</Link></li>
							<li class={basketClass}><Link to="basket">Basket</Link></li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}