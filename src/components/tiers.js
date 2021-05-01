import React, { Component } from "react";
import axios from "axios";
import ItemList from "./itemList";

class Tiers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/items")
      .then((res) => {
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
  createItem = (title, url) => {
    axios
      .post("/api/items", { title, url })
      .then((res) => {
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => {
        alert(`${err} create`);
      });
  };

  deleteItem = (id) => {
    axios
      .delete(`api/items/${id}`)
      .then((res) => {
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => {
        alert(`${err} delete`);
      });
  };
  updateItem = (id,url) => {
      axios.put(`/api/items/${id}` , {url})
      .then((res) => {
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => {
        alert(`${err} update`);
      });
      
  }
  render() {
    return (
      <div>
        <div className="Tiers">
          <div className="S">
            <div className="sTier">S Tier</div>
            <div className="Sbucket"></div>
          </div>
          <div className="A">
            <div className="aTier">A Tier</div>
            <div className="Abucket"></div>
          </div>
          <div className="B">
            <div className="bTier">B Tier</div>
            <div className="Bbucket"></div>
          </div>
          <div className="C">
            <div className="cTier">C Tier</div>
            <div className="Cbucket"></div>
          </div>
          <div className="D">
            <div className="dTier">D Tier</div>
            <div className="Dbucket"></div>
          </div>
          <div className="F">
            <div className="fTier">F Tier</div>
            <div className="Fbucket"></div>
          </div>
        </div>
        <div className="itemsfunction">
          <ItemList
            items={this.state.items}
            deleteItem={this.deleteItem}
            createItem={this.createItem}
            updateItem={this.updateItem}
          />
        </div>
      </div>
    );
  }
}

export default Tiers;
