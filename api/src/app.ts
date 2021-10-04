import express from "express";
import morgan from "morgan";
import cors from "cors";

import professionalsRoutes from "./routes/professionals.routes";

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(professionalsRoutes);

export default app;