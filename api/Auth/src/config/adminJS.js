const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Product = require("../models/Product");

AdminJS.registerAdapter(AdminJSMongoose);

const canModifyUsers = ({ currentAdmin }) =>
  currentAdmin && currentAdmin.role === "superadmin";

const adminJS = new AdminJS({
  resources: [
    {
      resource: User,
      options: {
        properties: {
          password: {
            isVisible: { show: false, edit: true },
          },
        },
        actions: {
          edit: { isAccessible: canModifyUsers },
          delete: { isAccessible: canModifyUsers },
          new: { isAccessible: canModifyUsers },
          list: { isAccessible: canModifyUsers },
        },
      },
    },
    {
      resource: Product,
      options: {
        properties: {
          description: {
            isVisible: { show: true, edit: true, list: false },
          },
        },
      },
    },
  ],
  branding: {
    companyName: "Gamerland",
    softwareBrothers: false,
    logo: false,
  },
  rootPath: "/admin",
});

const adminJSRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJS,
  {
    authenticate: async (email, password) => {
      const user = await User.findOne({ email });
      if (user) {
        const matched = await bcrypt.compare(password, user.password);
        const isSuperAdmin =
          user.role === "superadmin" || user.role === "admin";
        if (matched && isSuperAdmin) {
          return user;
        }
      }
      return false;
    },
    cookiePassword: process.env.SECRET_COOKIE,
  },
  null,
  {
    resave: true,
    saveUninitialized: true,
  }
);

module.exports = {
  adminJSRouter,
  rootPath: adminJS.options.rootPath,
};
