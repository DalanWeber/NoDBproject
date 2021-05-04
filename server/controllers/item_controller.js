const games = require("./gameItems");
const movies = require("./movieitems");
const books = require("./bookitems");

let itemArr = games;
let id = 46;

module.exports = {
  readItems: (req, res) => {
    res.status(200).send(itemArr);
  },
  createItem: (req, res) => {
    const { title, url } = req.body;
    const itemtoadd = {
      id: id,
      title: title,
      url: url,
      rank: "unranked",
    };
    itemArr.push(itemtoadd);
    id++;
    res.status(200).send(itemArr);
  },
  deleteItem: (req, res) => {
    const { id } = req.params;
    const index = itemArr.findIndex((item) => item.id === +id);
    if (index === -1) {
      return res.status(500).send("Item not found");
    }
    itemArr.splice(index, 1);
    res.status(200).send(itemArr);
  },
  updateItem: (req, res) => {
    const { id } = req.params;
    const { rank } = req.body;
    const index = itemArr.findIndex((item) => item.id === +id);
    itemArr.splice(index, 1, {
      id: +id,
      title: itemArr[index].title,
      url: itemArr[index].url,
      rank: rank || itemArr[index].rank,
    });
    res.status(200).send(itemArr);
  },
  resetItem: (req, res) => {
    const { id } = req.params;
    const index = itemArr.findIndex((item) => item.id === +id);
    itemArr.splice(index, 1, {
      id: +id,
      title: itemArr[index].title,
      url: itemArr[index].url,
      rank: "unranked",
    });
    res.status(200).send(itemArr);
  },
  movieItems: (req,res) => {
    itemArr = movies;
    res.status(200).send(itemArr);
  },
  gameItems: (req, res) => {
    itemArr = games;
    res.status(200).send(itemArr);
  },
  bookItems: (req, res) => {
    itemArr = books;
    res.status(200).send(itemArr);
  },
  customItems: (req,res) => {
    itemArr = [];
    res.status(200).send(itemArr);
  },
};
