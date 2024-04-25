import createApiCLient from "./api.service";

class CategoryService {
  constructor() {
    this.api = createApiCLient("/api/category");
  }

  async getAllCategory() {
    return (await this.api.get("/")).data;
  }

  async getcategorytwithID(id) {
    return (await this.api.get(`/editCategory/${id}`)).data;
  }

  async create(data) {
    return (await this.api.post("/", data)).data;
  }

  async get(id) {
    return (await this.api.get(`/find/${id}`)).data;
  }

  async findcategorywithName(name) {
    return (await this.api.get(`/findCategory/${name}`)).data;
  }

  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }

  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }

  async getcategoryProduct(name) {
    return (await this.api.get(`/categoryBook/${name}`)).data;
  }
}

export default new CategoryService();
