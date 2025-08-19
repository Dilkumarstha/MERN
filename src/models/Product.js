import mongoose from "mongoose";
import { stringify } from "querystring";

const productSchema = new mongoose.Schema({
  id:Number,
  name: String,
  price: Number,
rate:Number,
  content: String,
  review: Number,
 image:String 
});

const model = mongoose.model("product", productSchema);

export default model;


