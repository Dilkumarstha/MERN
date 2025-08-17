import productService from "../services/productService.js";

const getProduct = (req, res) => {
  
  res.json(productService.getProduct());
};

const getProductById = (req, res) => {
  const id = req.params.id;

  const products = productService.getProductById(id);
  res.json(products);
};

const getProductByQuery = (req, res) => {
  const query = req.query;
  console.log(query);
  const product = productService.getProductByQuery(query);
  res.json(product);
};

const createData = (req, res) => {
  const body = req.body;
  const data = productService.createData(body);
  res.json(data);
// res.status(201).send("data created sucessfully") 
};

const updateData = () => {};

const deleteData = () => {};
export default {
  getProduct,
  getProductById,
  getProductByQuery,
  createData,
  updateData,
  deleteData,
};
