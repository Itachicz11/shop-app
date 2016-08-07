import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class BasketItemStore extends EventEmitter {

	constructor() {
		super()
		this.basketItems = [];
	}


	getAll() {
		return this.basketItems;
	}

	getDeletedItemId() {
		return this.deletedItemId;
	}


	// Adds new item to the inventory store
	addItem( id, title, orderQuantity ) {
		this.basketItems.push({
			id,
			title, // We don't have to do title: title because of ES6... Thx ES6
			orderQuantity
		});

		this.emit("addToBakset");
	}


	removeItemFromBasket( removedItemId ) {

		const items = this.basketItems

		items.map((item, i) => {

			if ( item.id == removedItemId ) {
				delete items[i];
			}

		});

		this.emit("removeFromBasket");
	}



	handleActions( action ) {

		switch( action.type ) {
			case "ADD_TO_BASKET":
				const { id, title, orderQuantity } = action;
				this.addItem( id, title, orderQuantity );
			break;				
			case "REMOVE_FROM_BASKET":
				const { itemId } = action;
				this.deletedItemId = itemId;

				this.removeItemFromBasket( itemId );
			break;
		}

	}

}


const basketitemStore = new BasketItemStore;

dispatcher.register(basketitemStore.handleActions.bind(basketitemStore));

export default basketitemStore;