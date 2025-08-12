import fs from "fs";
const data = JSON.parse(fs.readFileSync("./src/data/todos.json"));
const todosFilter = (id) => {
  const checkId = data.filter((todos) => todos.id == id);
  if (checkId.length == 0) {
    return `task is not found by id : ${id}`;
  } else {
    const todosCompleted = checkId.filter((value) => value.completed == true);
    if(todosCompleted.length == 0){
return "task not completed !";
    }
    else {
        return todosCompleted;
    }
  }
};

export default { todosFilter };
