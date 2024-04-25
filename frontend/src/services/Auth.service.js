import createApiClient from "./api.service";

class AuthService{
    constructor(){
        this.api = createApiClient("/api/auth");
    }

    async createregister(data){
        return (await this.api.post("/register", data)).data;
    }

    async createlogin(data){
        return (await this.api.post("/login", data)).data;
    }
}

export default new AuthService();