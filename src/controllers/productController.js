import productService from "../services/productService.js";

const home = (req, res) => {
  res.send("<h1>HOME PAGE</h1>");
};

const contact = (req, res) => {
  console.log(req.params);
  res.send("<h1>CONTACT PAGE</h1>");
};

const product = (req, res) => {
  console.log(req.params);
  res.json(productService.productData());
};


const findProductById = (req, res) => {
  const id = req.params.id;
  
const product = productService.findProductById(id);
  res.json(product);
};
export default { home, contact, product, findProductById };
