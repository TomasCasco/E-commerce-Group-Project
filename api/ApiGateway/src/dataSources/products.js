const { RESTDataSource } = require("apollo-datasource-rest");
const serverUrls = require("../serverUrls");

class ProductsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverUrls.products;
  }

  async getAllProducts() {
    return await this.get("/");
  }

  async getProductsByName({ name, query }) {
    return await this.get(`/`, { name, query });
  }

  async getProductById(id) {
    return await this.get(`/${id}`);
  }

  async createProduct(product) {
    return await this.post("/create", product);
  }

  async updateProduct(id, product) {
    return await this.put(`/update/${id}`, product);
  }

  async deleteProduct(id) {
    return await this.delete(`/delete/${id}`);
  }
}

module.exports = ProductsApi;
