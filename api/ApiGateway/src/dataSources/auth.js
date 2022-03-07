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
  async infoUser(token) {
    return await this.get(`/userInfo`, null, {
      headers: { Authorization: token },
    });
  }
}

module.exports = UsersApi;
