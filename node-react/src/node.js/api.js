let express = require("express");
let app = express();
let cors = require("cors");
let database = require("./database/database");

let array = [
  {
    name: "Rohit",
    age: 25,
  },
];

let notes = require('../modal/note')

app.use(express.static(".../public"));
app.use(cors());

app.get("/api/data", async (req, res) => {
   let array = await notes.find({})
//   console.log(req.body);
  res.status(200).json({ success: true, data: array });
});

const connectionString =
  "mongodb+srv://rohit:rohit123454@nodeexpress.b0fiek8.mongodb.net/?retryWrites=true&w=majority";

const startServer = async () => {
  try {
    await database(connectionString);
    app.listen(4000, console.log("server has started"));
} catch (error) {
    console.log(error);
}
};

startServer()