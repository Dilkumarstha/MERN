

// simple demonstration for creting server and route within the express.

// import express from "express";
// const app = express();
// app.get("/",(req,res)=>{
//   res.send("server has ended");
// })


// app.listen(5000);





// *******************************************************************************************************************************

// creating server and route with the help of the express (level : 1)
 
// import express from "express";
// import fs from "fs";
// import dotenv from "dotenv";
// dotenv.config(); 

// import config from "./config/config.js";


// const AUTHOR = process.env.author;
// const app = express();

// app.get("/", (req, res) => {
//   res.status(300).send(config.name);
// });
// app.get("/data", (req, res) => {
//   const data = {
//     PORT: config.PORT,
//     AUTHOR: AUTHOR,
//   };
//   // res.writeHead(200,{"content-type":"application/json"})
//   res.status(202).json(data);
// });

// app.get("/fetch", (req, res) => {
//   const productsData = fs.readFileSync("src/data/products.json", "utf8");
//   res.json(JSON.parse(productsData));
// });

// app.get("/notFound", (req, res) => {
//   res.status(404).send("request not found");
// });

// app.listen(config.PORT);





// import express from "express";
// import fs from "fs";
// import dotenv from "dotenv";
// import config from "./config/config.js";

// configDotenv.config();
// const app = express();
// app.get("/",(req,res)=>{
// const productData = fs.readFileSync("./src/data/products.json");
//   res.json(JSON.parse(productData))
// });

// app.listen(config.port,()=>{
//   console.log(`printing the port ${port}`)
// })

// app.listen(config.PORT, () => {
//   console.log(`🚀 Server is running on port ${config.PORT}`);
// });

import express from "express";
// import dotenv from "dotenv";
// dotenv.config();
import config from "./config/config.js";
console.log("port  : "  +  config.AUTHOR)
console.log(config.PORT)


const app = express();
app.get("/",(req,res)=>{
  res.send("server has ens");
});
app.listen(config.PORT);


