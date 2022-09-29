let express = require("express");
let peoples = require("./data");
let app = express();

// console.log(peoples)

app.get("/", (req, res) => {
  res.send("<h1> <a href='/person'> Home page  </a> </h1>");
  res.end();
});

app.get("/person", (req, res) => {
  res.json(peoples.peoples);
});

app.get("/person/:value", (req, res) => {
  console.log(req.params);
  let person = peoples.peoples.find((people) => {
    return people.id == req.params.value;
  });

  if(!person){
    res.status(404).send('<h1> Not available </h1>')
  }
  res.json(person);
});

app.get("*", (req, res) => {
  res.write("<h1>Page not found </h1>");
  res.end();
});

app.listen(4000, () => {
  console.log("server started");
});
