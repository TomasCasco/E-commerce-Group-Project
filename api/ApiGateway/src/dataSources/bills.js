const { RESTDataSource } = require("apollo-datasource-rest");
const serverUrls = require("../serverUrls");

class BillsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverUrls.BILLS;
  }

  getBillsByUserId(userId) {
    return this.get(`/${userId}`);
  }
}

module.exports = BillsApi;
