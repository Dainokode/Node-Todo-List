const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

const items = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const day = date.getDate();
  res.render("list", { dayOfWeek: day, newListItems: items });
});

app.post("/", (req, res) => {
  const item = req.body.newTodo;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, () => console.log("Server running on port 3000!"));
