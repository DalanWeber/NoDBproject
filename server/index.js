const express = require("express");
const controller = require("./controllers/item_controller");
const app = express();
const PORT = 3080;

app.use(express.json());

app.get("/api/items", controller.readItems);
app.post("/api/items", controller.createItem);
app.delete("/api/items/:id", controller.deleteItem);
app.put("/api/update/:id", controller.updateItem);
app.put("/api/items/reset/:id", controller.resetItem);

app.put('/api/items/movies' , controller.movieItems)
app.put('/api/items/games' , controller.gameItems)
app.put('/api/items/books' , controller.bookItems)
app.put('/api/items/custom' , controller.customItems)


app.listen(PORT, () => {
  console.log(`Lets get that ${PORT}`);
});
