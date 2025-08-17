import fs from "fs";

import model from "../models/Product.js";

const rawData = fs.readFileSync("./src/data/products.json", "utf8");
const product = JSON.parse(rawData);

const getProduct = () => {
  return product;
};

const getProductById = (id) => {
  const products = product.filter((value) => id == value.id);
  return products;
};
const getProductByQuery = (query) => {
  // console.log(query.name)
  console.log(product.name).;
  const foundProduct = product.filter((value) => value.name == query.name);
  return foundProduct;

  // console.log(query);
};

const createData = (data) => {
  
 const models = model.create(data);
};
export default { getProduct, getProductById,getProductByQuery, createData };
