import React, { Component } from "react";
import AddItem from "./addItem";
import Items from "./items";

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div className="itemscontainer">
        <div className="items">
          {this.props.items.map((item) => {
            return (
              <Items
                item={item}
                deleteItem={this.props.deleteItem}
                updateItem={this.props.updateItem}
              />
            );
          })}
        </div>
        <div className="additem">
          <AddItem className="additem" createItem={this.props.createItem} />
        </div>
      </div>
    );
  }
}

export default ItemList;
