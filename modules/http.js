// import http from "http";

// const app = http.createServer((req,res)=>{
// console.log(req.method)
//     const data = {
//         "name": "Dil Kumar",
//         "age": 20,
//         "isStudent": true,
//         "skills": ["JavaScript", "Node.js", "MongoDB"]
//       };
//   res.writeHead(200,{"content-type":"application/json"});
  
//   res.end(JSON.stringify(data));
// })
// app.listen(5000,()=>{
//   console.log('The server is running at port 5000.');
  
// })


import http from "http";
const app = http.createServer((req,res)=>{
  console.log(req.method)

  const data = {
    name:"dilan",
    age:21,
    grade:"A"
  }
  res.writeHead(200,{"content-type":"application/json"})
  res.end(JSON.stringify(data));
})

app.listen(5000)