const { RESTDataSource } = require("apollo-datasource-rest");
const serverUrls = require("../serverUrls");

class BillsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverUrls.BILLS;
  }

  async buyFromCheckout(cart) {
    return this.post("/mercadopago", cart);
  }
}

module.exports = BillsApi;
