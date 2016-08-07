import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class InventoryItemStore extends EventEmitter {

	constructor() {
		super()
		this.items = [
			{
				id: 1,
				title: "first item",
				stockQuantity: 10
			},
			{
				id: 2,
				title: "second item",
				stockQuantity: 5
			}
		];
	}


	// Simply retrieve all current items
	getAll() {
		return this.items;
	}



	// Adds new item to the inventory store
	addItem( title, stockQuantity ) {
		const id = Date.now();
		this.items.push({
			id,
			title, // We don't have to do title: title because of ES6... Thx ES6
			stockQuantity
		});

		this.emit("change");
	}


	/**
	 * Lower the stock quantity of certain item
	 * @param  {integer} id
	 * @param  {integer} stockQuantity
	 */
	lowerQuantity( id, orderQuantity ) {

		this.items.map((item) => {

			if ( item.id == id ) {
				item.stockQuantity = item.stockQuantity - orderQuantity;
			}

		});

		this.emit("change");

	}


	/**
	 * Lower the stock quantity of certain item
	 * @param  {integer} id
	 * @param  {integer} stockQuantity
	 */
	addQuantity( basketItemId, basketItemQuantity ) {

		this.items.map((item) => {

			if ( item.id == basketItemId ) {
				item.stockQuantity = item.stockQuantity + basketItemQuantity;
			}

		});

		this.emit("change");
	}





	handleActions( action ) {

		switch( action.type ) {
			case "ADD_ITEM":
				const { title, stockQuantity } = action;
				this.addItem( title, stockQuantity );
			break;
			case "LOWER_QUANTITY":
				const { id, orderQuantity } = action;
				this.lowerQuantity( id, orderQuantity );
			break;
			case "ADD_INVENTORY_ITEM_QUANTITY":
				const { basketItemId, basketItemQuantity } = action;
				this.addQuantity( basketItemId, basketItemQuantity );
			break
			case "REMOVE_FROM_BASKET":
				console.log( 'sdkfsdkljfkls' );
			break;
		}

	}

}

const inventoryItemStore = new InventoryItemStore;

dispatcher.register(inventoryItemStore.handleActions.bind(inventoryItemStore));

export default inventoryItemStore;
