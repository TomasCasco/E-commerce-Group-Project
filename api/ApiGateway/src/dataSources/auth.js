const { RESTDataSource } = require("apollo-datasource-rest");
const serverUrls = require("../serverUrls");

class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverUrls.USERS;
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
  async confirmChangePassword(email) {
    return await this.post("/confirm-change-password", { email });
  }
  async editCart(userId, products) {
    return await this.put(`/${userId}/cart`, products);
  }
  async getCart(userId, products) {
    return await this.put(`/${userId}/cart`, products);
  }
}

module.exports = UsersApi;
