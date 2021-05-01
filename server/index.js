const express = require("express");
const controller = require("./controllers/item_controller");
const app = express();
const PORT = 3080;

app.use(express.json());

app.get("/api/items", controller.readItems);
app.post("/api/items", controller.createItem);
app.delete("/api/items/:id", controller.deleteItem);
app.put("/api/items/:id", controller.updateItem);


app.listen(PORT, () => {
  console.log(`Lets get that ${PORT}`);
});
