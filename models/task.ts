import { DataTypes } from "sequelize";
import sequelize from "@/helpers/database";

const Task = sequelize.define("task", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Task;
