let mongoose = require("mongoose");

const startdatabase = async (url) => {
  await mongoose.connect(url);
  console.log("connected to database");
};

module.exports = startdatabase;


// const { MongoClient} = require("mongodb");

// const uri =
//   "mongodb+srv://rohit:rohit123454@nodeexpress.b0fiek8.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri);

// async function run(){
//   try{
//     const database =  client.db("notesappnew")
//     const collection = database.collection("notes");
//     const query = {text : "hihihi"}

//     const data = await collection.findOne({})
//     console.log(data)

//     client.close()

//   }catch(error){
//     console.log(error)
//   }

// }

// run()


