import React from "react";

import BasketItemStore from "../stores/BasketItemStore";
import * as InventoryActions from "../actions/InventoryActions";

export default class InventoryItem extends React.Component {

	addToBasket() {
		const orderQuantity = parseInt(this._orderQuantity.value);
		const { id, title, stockQuantity } = this.props.item;

		if ( orderQuantity > stockQuantity ) {
			return alert('There are not enough items in stock.');
		}

		InventoryActions.addToBasket( id, title, orderQuantity );
		InventoryActions.lowerQuantity( id, orderQuantity );
	}

	render() {
		const { title, stockQuantity } = this.props.item;

		return (
			<tr>
				<td>{title}</td>
				<td>{stockQuantity}</td>
				<td>
					<input type="number" ref={(c) => this._orderQuantity = c} defaultValue="1" />
					<button class="btn btn-success" onClick={this.addToBasket.bind(this)}>Buy</button>
				</td>
			</tr>
		);
	}

}