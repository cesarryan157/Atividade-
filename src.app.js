import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./models/index.js"; // arquivo que inicializa sequelize e exporta
import userRoutes from "./routes/user.routes.js";
import projectRoutes from "./routes/project.routes.js";
import taskRoutes from "./routes/task.routes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("DB connected.");
  } catch (err) {
    console.error("DB connection error:", err);
  }
});
