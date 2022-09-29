// const value = require('fs')

// for(let i=0;i<10000;i++){
//     value.writeFile('./content/file.txt' , `hello man${i}` , {flag : 'a'} , (err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
// }

// const {createReadStream} = require('fs');

// const stream = createReadStream('./context/file.txt' , {
//     encoding : 'utf8',
//     highWaterMark : 100
// })

// let startdate = Date.now()

// stream.on('data' , (data)=>{
//     console.log(data)
//     let enddate = Date.now()
//     let difference = startdate-enddate
//     console.log(difference)
// })

// stream.on('error' , (err)=>{
//     console.log(err)
// })

// let value = require("fs");
// let http = require("http");

// let data1 = value.readFile("./content/file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   let server = http.createServer((req, res) => {
//     res.write(`${data}`);
//     res.end()
//   });

//   server.listen(4200);
// });
