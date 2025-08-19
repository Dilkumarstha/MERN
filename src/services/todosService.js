import fs from "fs";
import model from "../models/Todos.js";

const data = JSON.parse(fs.readFileSync("./src/data/todos.json"));
const todosFilter = (id) => {
  const checkId = data.filter((todos) => todos.id == id);
  if (checkId.length == 0) {
    return `task is not found by id : ${id}`;
  } else {
    const todosCompleted = checkId.filter((value) => value.completed == true);
    if (todosCompleted.length == 0) {
      return "task not completed !";
    } else {
      return todosCompleted;
    }
  }
};

const createData = async (data) => {
  const createdData = await model.create(data);
    return createdData;
};

export default { todosFilter, createData };
