import React, { Component } from "react";

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      rank: "",
    };
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  handleRank = (value) => {
    if (
      value === "S" ||
      value === "s" ||
      value === "A" ||
      value === "a" ||
      value === "B" ||
      value === "b" ||
      value === "C" ||
      value === "c" ||
      value === "D" ||
      value === "d" ||
      value === "F" ||
      value === "f"
    ) {
      this.setState({
        rank: value,
      });
    } else {
      alert("Rank must be S,A,B,C,D or F! Lowercase characters are accepted");
    }
  };

  handleupdateItem = () => {
    this.props.updateItem(this.props.item.id, this.state.rank);
    this.toggleEdit();
    this.setState({ rank: "" });
  };

  render() {
    return this.state.edit ? (
      <div className='itembox'>
        <input
          placeholder="Enter rank here"
          value={this.state.rank}
          size="9"
          maxlength="1"
          title="Rank S,A,B,C,D or F"
          onChange={(e) => {
            this.handleRank(e.target.value);
          }}
        />
        <button onClick={this.handleupdateItem}>Rank</button>
        <br />
        <img src={this.props.item.url} alt={this.props.item.title} />

        <br />
        {this.props.item.title}
        <br />
      </div>
    ) : (
      <div className='itembox'>
        <button onClick={() => this.props.deleteItem(this.props.item.id)}>
          -
        </button>

        <button onClick={this.toggleEdit}>Rank</button>
        <br />
        <img src={this.props.item.url} alt={this.props.item.title} />
        <br />
        {this.props.item.title}
        <br />
      </div>
    );
  }
}

export default Items;
