import productService from "../services/productService.js";
import todosService from "../services/todosService.js";
const toddosFilter = (req, res) => {
  const id = req.params.id;
  res.json(todosService.todosFilter(id));
};
const todoQuery = (req, res) => {
  const query = req.query;
  console.log(query);
  res.send(query);
};

const todoBody = (req, res) => {
  res.send(req.body);
  console.log(req.body);
};

const createData =async (req, res) => {
  const body = req.body;
 
  const data =await todosService.createData(body);
//   res.json(data);
  res.json({message:"data created sucessfully" ,todos:  data});
};

export default { toddosFilter, todoQuery, todoBody, createData };
