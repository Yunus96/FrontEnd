import conf from "../conf/conf.js";

export class AuthService {
    async registerUser({ username ,email, password}){
        try {
            //await 
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            
        } catch (error) {
            throw error
        }
    }

    async logout(){
        try {
            
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService