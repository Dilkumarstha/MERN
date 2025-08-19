import productService from "../services/productService.js";
import todosService from "../services/todosService.js";
const toddosFilter = (req, res) => {
  const id = req.params.id;
  res.json(todosService.todosFilter(id));
};
const todoQuery = (req, res) => {
  const query = req.query;
  const data = todosService.createData(query);
  res.send(query);
};

const todoBody = (req, res) => {
  res.send(req.body);
  console.log(req.body);
};

const createData = async (req, res) => {
  try {
    const body = req.body;
    const data = await todosService.createData(body);

    res.status(201).json({ message: "Data created successfully", todos: data});
  } catch (error) {
    console.error("Error in createData controller:", error);
    res.status(500).json({ message: error.message });
  }
};

export default { toddosFilter, todoQuery, todoBody, createData };
