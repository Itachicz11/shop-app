import React from "react";
import Formsy from 'formsy-react';

import InventoryItemInput from "../components/InventoryItemInput";
import * as InventoryActions from "../actions/InventoryActions";

const InventoryItemForm = React.createClass({
  getInitialState() {
    return {
      canSubmit: false
    }
  },

  enableButton() {
    this.setState({
      canSubmit: true
    });
  },

  disableButton() {
    this.setState({
      canSubmit: false
    });
  },

  submit(model) {
    let { title, stockQuantity } = model;
    InventoryActions.addItem( title, stockQuantity );
  },

  render() {
    return (
      <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
      <InventoryItemInput value="" name="title" placeholder="Item Title" validationError="This is not a valid email" required />
      <InventoryItemInput type="number" value="" name="stockQuantity" placeholder="Quantity" required />
      <button type="submit" class="btn btn-primary" disabled={!this.state.canSubmit}>Submit</button>
      </Formsy.Form>
      );
  }
});

export default InventoryItemForm;