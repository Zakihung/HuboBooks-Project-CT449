import createApiClient from "./api.service";

class UserService {
    constructor(baseUrl = "/api/user") {
        this.api = createApiClient(baseUrl);
    }
    async getAllUser() {
        return (await this.api.get("/")).data;
    }
    
    async getuserwithID(id) {
        return (await this.api.get(`/editUser/${id}`)).data;
    }
    
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    
    async get(id) {
        return (await this.api.get(`/find/${id}`)).data;
    }
    
    async finduserwithName(name) {
        return (await this.api.get(`/findUser/${name}`)).data;
    }
    
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
    
    async getuser(name) {
        return (await this.api.get(`/user/${name}`)).data;
    }
    
    async getuserwithid(id) {
        return (await this.api.get(`/infoUser/${id}`)).data;
    }
    
    async getuserwithidChangePass(id,data) {
        return (await this.api.put(`/changepassword/${id}`, data)).data;
    }
}

export default new UserService();
