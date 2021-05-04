import React, { Component } from "react";
import axios from "axios";
import ItemList from "./itemList";

class Tiers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    this.movieItems = this.movieItems.bind(this);
    this.customItems = this.customItems.bind(this);
    this.bookItems = this.bookItems.bind(this);
    this.gameItems = this.gameItems.bind(this);
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
  updateItem = (id, rank) => {
    axios
      .put(`/api/update/${id}`, { rank })
      .then((res) => {
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => {
        alert(`${err} update`);
      });
  };

  movieItems = () => {
    axios
      .put("/api/items/movies")
      .then((res) => {
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => {
        alert(`${err} movies`);
      });
  };
  gameItems = () => {
    axios
      .put("/api/items/games")
      .then((res) => {
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => {
        alert(`${err} games`);
      });
  };
  bookItems = () => {
    axios
      .put("/api/items/books")
      .then((res) => {
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => {
        alert(`${err} books`);
      });
  };
  customItems = () => {
    axios
      .put("/api/items/custom")
      .then((res) => {
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => {
        alert(`${err} custom`);
      });
  };

  resetItem = (id, rank) => {
    axios
      .put(`/api/items/reset/${id}`)
      .then((res) => {
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => {
        alert(`${err} reset`);
      });
  };
  render() {
    return (
      <div>
        <div className="Tiers">
          <div className="S">
            <div className="sTier">S Tier</div>
            <div className="bucket">
              {" "}
              {this.state.items
                .filter((item) => item.rank === "s" || item.rank === "S")
                .map((item) => {
                  return (
                    <div>
                      <img src={item.url} alt={item.title} />
                      <br />
                      {item.title}
                      <br />
                      <button onClick={(e) => this.resetItem(item.id)}>
                        Reset
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="A">
            <div className="aTier">A Tier</div>
            <div className="bucket">
              {" "}
              {this.state.items
                .filter((item) => item.rank === "a" || item.rank === "A")
                .map((item) => {
                  return (
                    <div>
                      <img src={item.url} alt={item.title} />
                      <br />
                      {item.title}
                      <br />
                      <button onClick={(e) => this.resetItem(item.id)}>
                        Reset
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="B">
            <div className="bTier">B Tier</div>
            <div className="bucket">
              {" "}
              {this.state.items
                .filter((item) => item.rank === "b" || item.rank === "B")
                .map((item) => {
                  return (
                    <div>
                      <img src={item.url} alt={item.title} />
                      <br />
                      {item.title}
                      <br />
                      <button onClick={(e) => this.resetItem(item.id)}>
                        Reset
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="C">
            <div className="cTier">C Tier</div>
            <div className="bucket">
              {" "}
              {this.state.items
                .filter((item) => item.rank === "c" || item.rank === "C")
                .map((item) => {
                  return (
                    <div>
                      <img src={item.url} alt={item.title} />
                      <br />
                      {item.title}
                      <br />
                      <button onClick={(e) => this.resetItem(item.id)}>
                        Reset
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="D">
            <div className="dTier">D Tier</div>
            <div className="bucket">
              {" "}
              {this.state.items
                .filter((item) => item.rank === "d" || item.rank === "D")
                .map((item) => {
                  return (
                    <div>
                      <img src={item.url} alt={item.title} />
                      <br />
                      {item.title}
                      <br />
                      <button onClick={(e) => this.resetItem(item.id)}>
                        Reset
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="F">
            <div className="fTier">F Tier</div>
            <div className="bucket">
              {this.state.items
                .filter((item) => item.rank === "f" || item.rank === "F")
                .map((item) => {
                  return (
                    <div>
                      <img src={item.url} alt={item.title} />
                      <br />
                      {item.title}
                      <br />
                      <button onClick={(e) => this.resetItem(item.id)}>
                        Reset
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="itemsfunction">
          <br />
          <div>
            {/* <button onClick={this.gameItems}>Games</button>
          <button onClick={this.movieItems}>Movies</button>
          <button onClick={this.bookItems}>Books</button>
          <button onClick={this.customItems}>Custom</button> */}
          </div>
          <br />
          <h2>Items:</h2>

          <div>
            <ItemList
              items={this.state.items}
              deleteItem={this.deleteItem}
              createItem={this.createItem}
              updateItem={this.updateItem}
              gameItems={this.gameItems}
              movieItems={this.movieItems}
              bookItems={this.bookItems}
              customItems={this.customItems}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tiers;
