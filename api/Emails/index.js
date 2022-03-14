const app = require("./src/app");

app.listen(app.get("port"), () => {
  console.log(`Emails listening on port ${app.get("port")}`);
});
