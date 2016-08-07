import dispatcher from "../dispatcher";


export function addItem( title, stockQuantity ) {
	dispatcher.dispatch({
		type: "ADD_ITEM",
		title,
		stockQuantity
	});
}


export function lowerQuantity( id, orderQuantity ) {
	dispatcher.dispatch({
		type: "LOWER_QUANTITY",
		id,
		orderQuantity
	});
}

export function addInventoryItemQuantity( basketItemId, basketItemQuantity ) {
	dispatcher.dispatch({
		type: "ADD_INVENTORY_ITEM_QUANTITY",
		basketItemId,
		basketItemQuantity
	});
}

export function addToBasket( id, title, orderQuantity ) {
	dispatcher.dispatch({
		type: "ADD_TO_BASKET",
		id,
		title,
		orderQuantity: parseInt(orderQuantity)
	});
}

export function removeFromBasket( itemId ) {
	dispatcher.dispatch({
		type: "REMOVE_FROM_BASKET",
		itemId
	});
}