import fs from "fs";
const task = JSON.parse(fs.readFile("./src/data/todos.json","utf-8"));

const todosFilter = (id)=>{
    const filterById = task.filter((value)=>value.id === id);
   
if(filterById.length == 0){

    return {
        status:404,
        message : "Task not found!"
    }
}
else{
 
    if(filterById.every((value)=>value.completed === true)){
   
        return {
            status : 200,
            message :filterById
        }
    }
    else {
        return {
            status:403,
            message:"task is not complete yet!"
        }
    }
 
}

  
}

const result = todosFilter(20);
console.log(result);

export default {todosFilter};