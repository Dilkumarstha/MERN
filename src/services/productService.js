import model from "../models/Product.js";

const getProduct = () => {
  return product;
};

const getProductById = async (id) => {
  // const products = product.filter((value) => id == value.id);
  // return products;
  const foundProduct = await model.findById(id);
  return foundProduct;
};
const getProductByQuery = async (query) => {
  try {
    // const foundProduct = product.filter((value) => value.name == query.name);
    const Product = await model.find({ name: query.name });

    if (Product.length == 0) {
      return {
        message: `product named :${query.name} not found!`,
      };
    } else {
      return Product;
    }
  } catch (error) {
    return { message: error.message };
  }
};

const createData = async (data) => {
  const createdProduct = await model.create(data);
  //  console.log(createdProduct);
  return createdProduct;
  //
};

const updateData = async (id, data) => {
  const updatedProduct = await model.findByIdAndUpdate(id, data);
  return updatedProduct;
};


const deleteData = async(id)=>{
  const deletedProduct =await model.findByIdAndDelete(id);
  return deletedProduct;
}

export default { getProduct, getProductById, getProductByQuery, createData ,updateData,deleteData};
