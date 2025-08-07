import todoService from "../services/todoService.js";

const todoList = (req, res) => {
  const todo = todoService.todoList();
  res.json(todo);
};

const todoFilter = (req,res)=>{
  const completed = req.params.completed;
  console.log(req.params);
  const filteredTodos = todoService.todoFilter(completed);
  res.json(filteredTodos);
}


export default { todoList,todoFilter};
