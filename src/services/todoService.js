import fs from "fs";

const todoList = () => {
  const task = fs.readFileSync("./src/data/todo.json", "utf-8");
  const tasks = JSON.parse(task);
  return tasks;
};

const todoFilter = (completed) => {
  const todo = fs.readFileSync("./src/data/todo.json", "utf-8");
  const todoData = JSON.parse(todo);
  const filteredTodo = todoData.find((value) => value.completed == true);
  return filteredTodo;
};

export default { todoList,todoFilter };
