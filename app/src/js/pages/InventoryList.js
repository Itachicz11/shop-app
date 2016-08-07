import React from "react";
import InventoryItem from "../components/InventoryItem";
import InventoryItemStore from "../stores/InventoryItemStore";
import { Link } from "react-router";

export default class InventoryList extends React.Component {
	constructor() {
		super();
		this.state = {
			items: InventoryItemStore.getAll(),
		}

		this.updateListItems = this.updateListItems.bind(this);
	}


	updateListItems() {
		this.setState({
			items: InventoryItemStore.getAll()
		});
	}


	componentWillMount() {
		InventoryItemStore.on("change", this.updateListItems);
		InventoryItemStore.on("removeFromBasket", () => {
			console.log( 'sdkfljslk' );
		});
	}


	// We have to remove the listener, each time we unmount the component
	// otherwise it would get called each time we switch route and get back
	componentWillUnmount() {
		InventoryItemStore.removeListener("change", this.updateListItems);
	}

	
	render() {

		const { items } = this.state; // Get all items from InventoryItemStore
		const ItemComponents = items.map((item, i) => { 
			return <InventoryItem key={i} item={item}/>
		});


		return (
			<div>

				<Link to="item/create" class="btn btn-primary">Create new item</Link>

				<h1>Inventory</h1>

				<table class="table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Stock</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{ItemComponents}
					</tbody>
				</table>

			</div>
		);
	}

}