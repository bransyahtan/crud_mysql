import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(userRouter);

app.listen(port, () => console.log("Server up and running..."));
