import React from "react";
import ReactDOM from "react-dom";

import InventoryItemForm from "../forms/InventoryItemForm";
import InventoryItemStore from "../stores/InventoryItemStore";
import * as InventoryActions from "../actions/InventoryActions";

export default class CreateInventoryItem extends React.Component {

	createItem(e) {
		e.preventDefault();

		let { title, quantity } = this.refs;

	}

	render() {

		return (
			<div class="col-md-6">
				<h2>Create new inventory item</h2>

				<InventoryItemForm />

			</div>
		);
	}

}

