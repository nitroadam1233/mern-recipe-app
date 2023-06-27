import express from "express";
import cors from "cors";
import mongoose from "mongoose"; 
import dotenv from "dotenv";

import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";


dotenv.config(); 

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Cluster0", // Specify the database name
  })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
  

app.listen(3001, () => console.log("SERVER STARTED!"));
