import React, { Component } from "react";

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      url: ""
    };
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  handleURL = (value) => {
    this.setState({
      url: value,
    });
  };

  handleupdateItem = () => {
      this.props.updateItem(this.props.item.id, this.state.url)
      this.toggleEdit()
      this.setState({url: ''})
  }

  render() {
    return this.state.edit ? (
      <div>
        <input
          placeholder="Enter your new image URL"
          value={this.state.url}
          onChange={(e) => {
            this.handleURL(e.target.value);
          }}
        />
        <br />
        {this.props.item.title}
        <br/>
        <button onClick={this.handleupdateItem}>Update</button>
      </div>
    ) : (
      <div>
        <img src={this.props.item.url} />
        <br />
        {this.props.item.title}
        <br />
        <button onClick={() => this.props.deleteItem(this.props.item.id)}>
          -
        </button>
        <button onClick={this.toggleEdit}>Edit</button>
      </div>
    );
  }
}

export default Items;
