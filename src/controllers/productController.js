import productService from "../services/productService.js";

const getProduct = (req, res) => {
  res.json(productService.getProduct());
};

const getProductById = async (req, res) => {
  const id = req.params.id;

  const products = await productService.getProductById(id);
  res.json(products);
};

const getProductByQuery = async (req, res) => {
  const query = req.query;
  // console.log(query);
  const product = await productService.getProductByQuery(query);
  res.json(product);
};

const createData = async (req, res) => {
  try {
    const body = req.body;
    const data = await productService.createData(body);
    res.json(data);
    // res.status(201).send("data created sucessfully")
  } catch (error) {
    res.send(error.message);
  }
};
const updateData = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedData = await productService.updateData(id, data);

    res.json({ message: "data updated sucessfully", data: updatedData });
  } catch (error) {
    res.send(error.message);
  }
};

const deleteData = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = productService.deleteData(id);
    res.send("deletedProduct sucessfully");
  } catch (error) {
    res.send(error.message);
  }
};
export default {
  getProduct,
  getProductById,
  getProductByQuery,
  createData,
  updateData,
  deleteData,
};


