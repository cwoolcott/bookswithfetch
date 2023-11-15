const express = require("express");
const { logging } = require("./middleware/");

const app = express();
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//everying response request
app.use(logging);

const api = require("./routes");
const PORT = process.env.PORT || 3001;

//modular routing
app.use("/api", api);

app.use(express.static("public"));

app.get("/books", (req, res) => {
  res.sendFile(__dirname + "/public/books.html");
});

app.listen(PORT, () => {
  console.log("LISTENING ON PORT " + PORT);
});
