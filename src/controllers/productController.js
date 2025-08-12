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
  // const id = req.params.id;
  // console.log(id);
  const query = req.query;
  console.log(query);
const product = productService.findProductById(query);
  res.json(product);
};


const createData= (req,res)=>{
  console.log(req.body)
  const data = productService.createData(req.body);
res.json(data)
// res.send("dilan")
};
export default { home, contact, product, findProductById,createData };
