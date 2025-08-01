import http from "http";


const server = http.createServer((request, response) => {
  response.end("Hello Dil Kumar");
});

server.listen(5000, () => {
  console.log("Server running at port 5000...");
});
