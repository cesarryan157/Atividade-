import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import UserModel from "./user.model.js";
import ProjectModel from "./project.model.js";
import TaskModel from "./task.model.js";

dotenv.config();
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: process.env.DB_PORT || 3306,
  logging: false
});

// inicializa models
const User = UserModel(sequelize);
const Project = ProjectModel(sequelize);
const Task = TaskModel(sequelize);

// associações
User.hasMany(Project, { foreignKey: "id_usuario", as: "projects" });
Project.belongsTo(User, { foreignKey: "id_usuario", as: "owner" });

Project.hasMany(Task, { foreignKey: "id_projeto", as: "tasks" });
Task.belongsTo(Project, { foreignKey: "id_projeto", as: "project" });

export { User, Project, Task };
