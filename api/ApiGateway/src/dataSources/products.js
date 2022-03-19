const { RESTDataSource } = require("apollo-datasource-rest");
const serverUrls = require("../serverUrls");

class ProductsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverUrls.PRODUCTS;
  }

  async getAllProducts(input) {
    const inputExists = input ? true : false;
    return await this.get("/", inputExists ? Object.assign(input) : null);
  }

  async getAllBrands(input) {
    return await this.get("/all/brands");
  }
  async getAllCategories(input) {
    return await this.get("/all/categories");
  }

  async getProductsByNameOrType({ name, query }) {
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
