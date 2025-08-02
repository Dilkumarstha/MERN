import express from "express";
import fs from "fs";

const app = express();

app.get("/", (req, res) => {
  //   res.write("hello");
  //   res.write("   " + "world");
  //   res.end();
  res.status(500).json({
    name: "dilan",
    age: 21,
    class: "rhino section",
  });
});

app.get("/products", (req, res) => {
    res.status(200).json({
        name: "dilan",
        age: 21,
        class: "rhino section",
      });
});
app.listen(5000, () => {
  console.log("server is running at port : 5000");
});
