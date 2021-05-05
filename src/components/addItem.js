import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      url: "",
    };
  }
  handleTitle = (value) => {
    this.setState({
      title: value,
    });
  };
  handleURL = (value) => {
    this.setState({
      url: value,
    });
  };

  handleAdd = () => {
    this.props.createItem(this.state.title, this.state.url);
    this.setState({
      title: "",
      url: "",
    });
  };
  render() {
    return (
      <div>
        <h3>Add Item</h3>
        <strong>Title:</strong>
        <br />
        <input
          value={this.state.title}
          onChange={(e) => this.handleTitle(e.target.value)}
          placeholder="Enter your game title here"
          size="18"
        />
        <br />
        <br />
        <strong>Image URL:</strong>
        <br />
        <input
          value={this.state.url}
          onChange={(e) => this.handleURL(e.target.value)}
          placeholder="Enter your Image URL here"
          size="19"
        />
        <br />
        <button onClick={this.handleAdd}>+</button>
        <br />

        <h3>Lists:</h3>
        <button onClick={this.props.gameItems}>Games</button>
        <br />
        <button onClick={this.props.movieItems}>Movies</button>
        <br />
        <button onClick={this.props.bookItems}>Books</button>
        <br />
        <button onClick={this.props.customItems}>Custom</button>
        <br />
      </div>
    );
  }
}

export default AddItem;
