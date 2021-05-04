import React, { Component } from "react";
import AddItem from "./addItem";
import Items from "./items";

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="itemscontainer">
        <div className="items" key={this.props.items.id}>
          {this.props.items
            .filter((item) => item.rank === "unranked")
            .map((item) => {
              return (
                <Items
                  key={this.props.items.id}
                  item={item}
                  deleteItem={this.props.deleteItem}
                  updateItem={this.props.updateItem}
                />
              );
            })}
        </div>
        <div className="additem">
          <AddItem
            className="additem"
            createItem={this.props.createItem}
            gameItems={this.props.gameItems}
            movieItems={this.props.movieItems}
            bookItems={this.props.bookItems}
            customItems={this.props.customItems}
          />
        </div>
      </div>
    );
  }
}

export default ItemList;
