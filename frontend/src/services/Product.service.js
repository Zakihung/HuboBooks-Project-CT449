import createApiClient from "./api.service";

class ProductService {
  constructor() {
    this.api = createApiClient("/api/products");
  }

  async getAllProduct() {
    return (await this.api.get("/")).data;
  }

  async getproductwithID(id) {
    return (await this.api.get(`/editBook/${id}`)).data;
  }

  async getProductLimit() {
    return (await this.api.get("/limit")).data;
  }

  async create(data) {
    return (await this.api.post("/", data)).data;
  }

  async get(id) {
    return (await this.api.get(`/find/${id}`)).data;
  }

  async getwithID(id) {
    return (await this.api.get(`/${id}`)).data;
  }

  async findproductwithName(name) {
    return (await this.api.get(`/findProduct/${name}`)).data;
  }

  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }

  // async updateproductafterorder(id, data) {
  //   return (await this.api.put(`/${id}`, data)).data;
  // }

  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }

  async getcategoryProduct(name) {
    return (await this.api.get(`/categoryBook/${name}`)).data;
  }

  
}

export default new ProductService();
