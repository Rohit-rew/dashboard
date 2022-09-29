let express = require("express");
let app = express();
let {logger} = require('./logger')
let {authorize} = require('./logger')

app.use(authorize,logger)

app.get("/", (req, res) => {
  res.send("<h1>Home page </h1>");
});
app.get("/about",(req, res) => {
  res.send("<h1>About page </h1>");
});
app.get("/query",(req, res) => {
  res.send("<h1> authenticated </h1>");
});

app.listen(4200);
