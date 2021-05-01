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
        title: value
      })
  };
  handleURL = (value) => {
      this.setState({
          url: value
      })
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
        <strong>Title:</strong><br/>
        <input
          value={this.state.title}
          onChange={(e) => this.handleTitle(e.target.value)}
          placeholder="Enter your game title here"
        />
        <br />
        <strong>Image URL:</strong><br/>
        <input
          value={this.state.url}
          onChange={(e) => this.handleURL(e.target.value)}
          placeholder="Enter your Image URL here"
        />
        <br />
        <button onClick={this.handleAdd}>+</button>
      </div>
    );
  }
}

export default AddItem;
