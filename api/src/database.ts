import mongoose from "mongoose";
import config from "./config";


const MONGODB_URI =
  'mongodb+srv://yara25767:Y25767@cluster0.iccrv.mongodb.net/professionalsdb?retryWrites=true&w=majority'
  
mongoose
  .connect(MONGODB_URI,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    authSource: "admin",
    user: config.MONGO_USER,
    pass: config.MONGO_PASSWORD,
  })
  .then(() => {
    // eslint-disable-next-line
    console.log("Database Connection Established...!");
  })
  .catch((err) => {
    // eslint-disable-next-line
    console.log("Error: Database connection can not be established...!", err);
  });
    
   

    
  
