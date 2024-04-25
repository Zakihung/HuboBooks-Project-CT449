import createApi from "./api.service";

class AuthorService {
  constructor() {
    this.api = createApi("/api/author");
  }

  async getAllAuthor() {
    return (await this.api.get("/")).data;
  }

  async getauthorwithID(id) {
    return (await this.api.get(`/editAuthor/${id}`)).data;
  }

  async create(data) {
    return (await this.api.post("/", data)).data;
  }

  async get(id) {
    return (await this.api.get(`/find/${id}`)).data;
  }

  async findauthorwithName(name) {
    return (await this.api.get(`/findAuthor/${name}`)).data;
  }

  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }

  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }

  async getauthor(name) {
    return (await this.api.get(`/authorBook/${name}`)).data;
  }
}

export default new AuthorService();
