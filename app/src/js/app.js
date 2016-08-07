import React from "react";
import ReactDOM from "react-dom";

import Layout from "./pages/Layout";
import InventoryList from "./pages/InventoryList";
import CreateInventoryItem from "./pages/CreateInventoryItem";
import Basket from "./pages/Basket";

import { Router, Route, IndexRoute, hashHistory } from "react-router";

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
	<Route path="/" component={Layout}>
		<IndexRoute component={InventoryList}></IndexRoute>
		<Route path="basket" name="basket" component={Basket}></Route>
		<Route path="item/create" name="createItem" component={CreateInventoryItem}></Route>
	</Route>
	</Router>,
app);