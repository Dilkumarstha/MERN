import productService from "../services/productService.js";
import todosService from "../services/todosService.js";
const toddosFilter = (req,res)=>{
    const id = req.params.id;
    res.json(todosService.todosFilter(id));
   
   
}
const todoQuery = (req,res)=>{
    const query = req.query;
    console.log(query)
    res.send(query);
}


const todoBody = (req,res)=>{
    res.send(req.body)
    console.log(req.body)
}

const createData = (req,res)=>{
const data = req.body;
const createData = todosService.createData;
res.json(createData);
}

export default {toddosFilter,todoQuery,todoBody,createData};