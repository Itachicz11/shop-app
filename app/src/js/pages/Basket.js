import React from "react";

import BasketItemStore from "../stores/BasketItemStore";
import BasketItem from "../components/BasketItem";

export default class Basket extends React.Component {

	constructor() {
		super();
		this.state = {
			items: BasketItemStore.getAll(),
		}

		this.removeBasketItems = this.removeBasketItems.bind(this);
	}

	removeBasketItems() {
		this.setState({
			items: BasketItemStore.getAll()
		});
	}



	componentWillMount() {
		BasketItemStore.on("removeFromBasket", this.removeBasketItems);
	}


	// We have to remove the listener, each time we unmount the component
	// otherwise it would get called each time we switch route and get back
	componentWillUnmount() {
		BasketItemStore.removeListener("removeFromBasket", this.removeBasketItems);
	}


	render() {

		const basketItems = BasketItemStore.getAll();

		const basketComponents = basketItems.map((item, i) => {
			return <BasketItem key={i} item={item} />
		});

		return (
			<div>

				<h1>Your Basket</h1>

				<table class="table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Ammount</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{basketComponents}
					</tbody>
				</table>

			</div>
		);
	}
}