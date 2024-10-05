import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const app = express();

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed ", err);
  });

// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("Error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log("app is running on port " + process.env.PORT);
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// })();