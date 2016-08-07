import React from "react";

import * as InventoryActions from "../actions/InventoryActions";
import BasketItemStore from "../stores/BasketItemStore";

export default class BaksetItem extends React.Component {


	removeFromBasket() {
		const itemId = this.props.item.id;
		const removedItemsQuantity = this.removedItemsQuantity();

		InventoryActions.addInventoryItemQuantity( itemId, removedItemsQuantity );
		InventoryActions.removeFromBasket( itemId );
	}

	// Before we remove the items we want to now the quantity items
	// that are going to be removed from the basket
	removedItemsQuantity() {

		let quantity = 0;
		const basketItems = BasketItemStore.getAll();
		const removedItemId = this.props.item.id;

		basketItems.map((item, i) => {

			if ( item.id == removedItemId ) {
				quantity += item.orderQuantity;
			}

		});

		return quantity;

	}


	render() {

		const itemProps = this.props.item;

		return(
			<tr>
				<td>{itemProps.title}</td>
				<td>{itemProps.orderQuantity}</td>
				<td><button class="btn btn-danger" onClick={this.removeFromBasket.bind(this)}>Remove</button></td>
			</tr>

		);
	}
}