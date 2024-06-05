import express from "express";
import cors from "cors";
import usuariosRouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

// Configurar CORS solo para la ruta /api/users
const corsOptions = {
  origin: "http://localhost:81", // Puedes especificar un origen específico en lugar de '*'
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use("/api/users", cors(corsOptions), usuariosRouter);

// Middleware para manejar el JSON

export default app;
