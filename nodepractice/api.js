let file = require("fs");
let data = require("./data");
let express = require("express");
let app = express();
let http = require("http");
let cors = require("cors");
let peoples = data.peoples;

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  console.log(req.body);
  if (req.url === "/api/data") {
    res.json(peoples);
  }else{
     res.status(400).json({success : false , message : 'invalid request'})
    res.end();
  }
});

app.post("/api/data", (req, res) => {
  let {name} = req.body;
  if (!name) {
    res
      .status(400)
      .json({ success: false, message: "please input a valid name" });
  } else {
    res
      .status(201)
      .json({
        success: true,
        updated: req.body.name,
        data: [...peoples, { name: req.body.name }],
      });
    res.end();
  }
});

app.put("/api/data", (req, res) => {
  console.log(req.body);
  res
    .status(201)
    .json({
      success: true,
      updated: req.body.name,
      data: [...peoples, (name = req.body.name)],
    });
});

app.listen(4500);
