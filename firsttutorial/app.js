const { peoples } = require("./data");
const express = require("express");
const app = express();

// =======> GET METHOD// this is the get method  which is the default method by the browser

// app.get('/' , (res , req)=>{
//     console.log(res.url)
//     req.json(peoples)
// })

// app.listen(4200)

// ==========> POST METHOD

// posting something in the database, since our database is not setup yet we will not be abe to persist the changes made. but we can try doing so by the write file method.

let file = require("fs");
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: peoples });
});

app.post("/api/people", (req, res) => {
  let { name } = req.body;

  if (!name) {
    res.status(400).json({ success: false, msg: "Name not provided" });
  } else {
    res.status(201);
    res.json({ success: true, data: [...peoples, { name }] });
  }
});

app.put("/api/people/:id", (req, res) => {
  let { name } = req.body;
  let { id } = req.params;

  let people = peoples.find((people1) => {
    return people1.id == id;
  });

  if (!people) {
    return res
      .status(400)
      .json({ success: false, msg: `no person with the id ${id}` });
  }

  let newpeoples = peoples.map((people) => {
    if (people.id === Number(id)) {
      return { ...people, name };
    } else {
      return people;
    }
  });
  res.status(201).json({ success: true, data: newpeoples });
});

app.listen(4200);
