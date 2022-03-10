const { RESTDataSource } = require("apollo-datasource-rest");
const serverUrls = require("../serverUrls");

class EmailsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverUrls.emails;
  }

  async signup(input) {
    return await this.post("/signup", input);
  }
  async forget(input) {
    return await this.post("/forget", input);
  }
}

module.exports = EmailsApi;
