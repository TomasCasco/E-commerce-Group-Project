const { RESTDataSource } = require("apollo-datasource-rest");
const serverUrls = require("../serverUrls");

class BillsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverUrls.BILLS;
  }

  async buyFromCheckout(items, userId, email) {
    return await this.post("/mercadopago", { items, userId, email });
  }

  async getBills(id) {
    return await this.get(`/get-bill/${id}`);
  }
}

module.exports = BillsApi;
