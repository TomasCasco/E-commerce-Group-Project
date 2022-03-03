const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { BCRYPT_ROUNDS } = process.env;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "client", "superadmin"],
      default: "client",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  let user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();
  // hash the password using our new salt
  user.password = bcrypt.hashSync(user.password, parseInt(BCRYPT_ROUNDS));
  next();
});

module.exports = mongoose.model("User", userSchema);
