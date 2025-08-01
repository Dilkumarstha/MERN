import express from "express";
import fs from "fs";

const app = express();

app.get("/", (req, res) => {
  //   res.write("hello");
  //   res.write("   " + "world");
  //   res.end();

  res.send("HELLO WORLD");
});

app.get("/products", (req, res) => {
  const product = ["iphone 14 pro max ", "samsung s 24 ultra", "oneplus 7+"];

//   const products = fs.readFileSync("src/products.json", "utf8");
//   const productsobj = JSON.parse(products);
//   res.json(productsobj);

res.status(200).json({
    name:"dilan",
    age:21,
    class:"rhino section"
})

});
app.listen(5000, () => {
  console.log("server is running at port : 5000");
});
