import fs from "fs";

const rawData = fs.readFileSync("./src/data/products.json", "utf8");
const product = JSON.parse(rawData);

const productData = () => {
  const filteredData = product.filter((data) => data.price < 200);
  return filteredData;
};

const findProductById = (query) => {
  // console.log(query.name)
  console.log(product.name);
  const foundProduct = product.filter((value) => value.name == query.name);
  return foundProduct;

  // console.log(query);
};

const createData = (data)=>{
 console.log(data)
 return data;

}
export default { productData, findProductById,createData };
