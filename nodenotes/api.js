let express = require("express");
let app = express();

let database = require('./database/connect')

let cors = require("cors");
app.use(cors());

app.use(express.static("./public"));

const { urlencoded } = require("express");
app.use(urlencoded({ extended: false }));
app.use(express.json());

const notes = require("./routes/notes.js");
app.use("/api/notes", notes);



const connectionString = "mongodb+srv://rohit:rohit123454@nodeexpress.b0fiek8.mongodb.net/notesappnew?retryWrites=true&w=majority"

const start = async ()=>{
    try{
        await database(connectionString)
        app.listen(4500 , console.log('server started'));
    }catch(error){
        console.log(error)
    }

}

start()
