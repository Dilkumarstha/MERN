import dotenv from "dotenv";
dotenv.config();
const config = {
    PORT: process.env.PORT || 9000,
    AUTHOR: process.env.AUTHOR || "Dilan Shrestha"
  };
  

export default config;



