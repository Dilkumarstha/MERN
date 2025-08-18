import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({

  task: String,
  completion: Boolean,
  remarks: String,
});

const model = mongoose.model("todos", todosSchema);
export default model;
