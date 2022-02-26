const app = require("./src/app");

app.listen(app.get("port"), () => {
  console.log(`server listening on port ${app.get("port")}`);
});
