// using promises to read file data

// const file = require("fs");

// function myfunction(path) {
//   console.log(`inside 1  ${Date.now()}`);
//   return new Promise((resolve, reject) => {
//     console.log(`inside 2  ${Date.now()}`);
//     return file.readFile(path, "utf8", (err, data) => {
//       console.log(`inside 3  ${Date.now()}`);
//       if (err) {
//         reject(err);
//       }
//       if (data) {
//         console.log(`inside 4  ${Date.now()}`);
//         resolve(data);
//       }
//     });
//   });
// }

// myfunction("./content/file.txt").then((data) => {
//   console.log(data);
//   console.log(`outside ${Date.now()}`);
// });

// using async await and promises to fetch data

// const file = require("fs");

// function myfunction(path) {
//   return new Promise((resolve, reject) => {
//     return file.readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       if (data) {
//         resolve(data);
//       }
//     });
//   });
// }

// const newdata = async () => {
//   let data = await myfunction("./content/file.txt");
//   console.log(data)

//   file.writeFile('./content/newfile000.text' , `created file ---- ${data} ` , (err)=>{
//     if(err){
//         console.log(err)
//     }
//   })

//   return new Promise ((resolve , reject)=>{
//      return file.readFile("./content/newfile000.text" , "utf8" , (err , data)=>{
//         if(err){
//             reject(err)
//         }if(data){
//             resolve(data)
//         }
//       } )

//   })

// };

// const anotherfunc = async ()=>{
//     let data = await newdata()
//     console.log(`r - ${data}`)
// }

// anotherfunc()

// using utils (promisify) to read and write data wit async await

// let value = require("util");
// let readfile = require("fs").readFile;

// let readfilepromise = value.promisify(readfile);

// let promisehandle = async () => {
//   return await readfilepromise(
//     "./content/file.txt",
//     "utf-8",
//     async (err, data) => {
//       if (err) {
//         return;
//       }
//       console.log(data);
//       return await data;
//     }
//   );
// };

// let datafunc = async () => {
//   return new Promise((resolve, reject) => {
//     resolve(promisehandle());
//   });
// };

// datafunc();



let value = require("fs")

let {readFile , writeFile} = require('fs').promises

const func = async ()=>{
    let value = await readFile("./content/file.txt" , "utf8")

    await writeFile("./content/newfile121212.txt" , `new123 - ${value}`)

}

setTimeout(()=>{
    func()

},3000)
