import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import bookRoutes from "./routes/book.routes.js";
import bodyParser from "body-parser";

config();
//usamos express para los middleware
const app = express();

app.use(bodyParser.json()); //parseador de bodies

//conexion con la base datos
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME });
const db = mongoose.connection;

app.use("/books", bookRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`servidor iniciado en el puerto ${port}`);
});
