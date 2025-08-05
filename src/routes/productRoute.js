import express from "express";
import fs from "fs";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>HOME PAGE</h1>");
});

router.get("/contact", (req, res) => {
  res.send("<h1>CONTACT PAGE</h1>");
});

// reading data from the products.json and filtering the items whose price is less than 200


function filterData(data){
    const products = JSON.parse(data);
  return  products.filter((data) => data.price < 200);
}
router.get("/product/filter", (req, res) => {
  const rawData = fs.readFileSync("./src/data/products.json", "utf8");
  const filterProducts = filterData(rawData)
  res.json(filterProducts);
});
export default router;
