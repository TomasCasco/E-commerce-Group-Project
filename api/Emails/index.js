const app = require("./src/app");

app.listen(app.get("port"), () => {
  console.log(`Products listening on port ${app.get("port")}`);
});
