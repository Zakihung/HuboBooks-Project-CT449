import createApiClient from "./api.service";

class BookTypeService {
  constructor() {
    this.api = createApiClient("/api/booktype");
  }

  async getAllBookType() {
    return (await this.api.get("/")).data;
  }

  async getbooktypewithID(id) {
    return (await this.api.get(`/editbooktype/${id}`)).data;
  }

  async create(data) {
    return (await this.api.post("/", data)).data;
  }

  async get(id) {
    return (await this.api.get(`/find/${id}`)).data;
  }

  async findbooktypewithName(name) {
    return (await this.api.get(`/findbooktype/${name}`)).data;
  }

  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }

  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }

  async getbooktype(name) {
    return (await this.api.get(`/booktype/${name}`)).data;
  }
}

export default new BookTypeService();
