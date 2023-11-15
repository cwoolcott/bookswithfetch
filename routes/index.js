const routes = require("express").Router();
const bookData = require("../data/books.json");

routes.get("/allbooks", (req, res) => {
  res.json(bookData);
});

routes.post("/newbook", (req, res) => {
  console.log(req.body);
  bookData.push(req.body);
  res.json(`Book has been added!`);
});

routes.get("/bunchofbooks", (req, res) => {
  res.json(`${req.method} This needs to be a post!`);
});

routes.post("/bunchofbooks", (req, res) => {
  res.json(`${req.method} was received! Bunch of Books!`);
});

module.exports = routes;
