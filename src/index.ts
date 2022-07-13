import express from "express";
import swagger from "swagger-ui-express";
import { usersRoutes } from "./routes/users.routes";
import yaml from "yamljs";

const swaggerdoc = yaml.load("./swagger.yaml");
const app = express();

app.use(express.json());

app.use("/api-docs", swagger.serve, swagger.setup(swaggerdoc));
app.use("/users", usersRoutes);
export { app };
