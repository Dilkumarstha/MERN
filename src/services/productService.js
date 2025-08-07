import fs from "fs";

const rawData = fs.readFileSync("./src/data/products.json", "utf8");
const product = JSON.parse(rawData);

const productData = () => {
  const filteredData = product.filter((data) => data.price < 200);
  return filteredData;
};

const findProductById = (id) => {
 const foundProduct =  product.find((value)=>value.id == id);
  return foundProduct;
};
export default { productData, findProductById };
