const { DataTypes } = require("sequelize");

//exporto una funcion que define el modelo,
//luego le injectamos la conexion sequelize
module.exports = (sequelize) => {
  sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Username in use",
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email in use",
      },
      validate: {
        isEmail: {
          msg: "Invalid email type",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
