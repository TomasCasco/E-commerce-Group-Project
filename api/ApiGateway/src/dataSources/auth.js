const { RESTDataSource } = require("apollo-datasource-rest");
const serverUrls = require("../serverUrls");

class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverUrls.users;
  }

  async registerUser(credentials) {
    return await this.post("/register", credentials);
  }

  async loginUser(credentials) {
    return await this.post("/login", credentials);
  }
}

module.exports = UsersApi;
