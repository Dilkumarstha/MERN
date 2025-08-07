
import todosService from "../services/todosService.js";
const todosFilter = (req,res)=>{
    const id = req.params.id;
    const todo = todosService.todosFilter(id);
   
    res.status(todo.status).json(todo.message);
}

export default {todosFilter};