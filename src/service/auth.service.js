import conf from "../conf/conf.js";
import axios from "axios";
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

    async getEmails(){
        try {
            const response = await axios.get("http://localhost:8000/api/v1/emails/all");
            return response.data
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService