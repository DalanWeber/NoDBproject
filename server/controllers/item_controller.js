const data = require('./gameItems')

let itemArr = data;
let id = 16;

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
    };
    itemArr.push(itemtoadd);
    id++;
    res.status(200).send(itemArr);
  },
  deleteItem: (req, res) => {
    const { id } = req.params;
    const index = itemArr.findIndex((item) => item.id === +id);
    if(index === -1){
      return res.status(500).send("Item not found")
    }
    itemArr.splice(index, 1);
    res.status(200).send(itemArr);
  },
  updateItem: (req, res) => {
    const { id } = req.params;
    const { title, url } = req.body;
    const index = itemArr.findIndex((item) => item.id === +id);
    itemArr.splice(index, 1, {
      id: +id,
      title: title || itemArr[index].title,
      url: url || itemArr[index].url,
    });
    res.status(200).send(itemArr);
  },
};
