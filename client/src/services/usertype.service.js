import authHeader from "./auth-header";
const axios = require("axios").default;
const API_URL = "http://localhost:3030/user_types/";

class UserType{
    getUserTypes(){
        return axios.get(API_URL, {}).then(response => {
            console.log(response.data);
            return response.data;
        }).catch(err => {
            return { status: "fail", message: "There is an error", data: err };
        });
    }

    getUserType(id){
        return axios.get(API_URL+id, {headers:authHeader}).then(response => {
            return response.data;
        }).catch(err => {
            return {status:"fail", message:"There is an error", data:err};
        });
    }

    saveUserType(usertype){
        return axios.post(API_URL, usertype, {headers:authHeader}).then(response => {
            return response.data;
        }).catch(err => {
            return { status: "fail", message: "There is an error", data: err };
        });
    }

    editUserType(id, usertype){
        return axios.put(API_URL+id, usertype, {headers:authHeader}).then(response => {
            return response.data;
        }).catch(err => {
            return {status:"fail", message:"There is an error", data:err};
        });
    }

    delUserType(id){
        return axios.delete(API_URL+id, {headers:authHeader}).then(response => {
            return response.data;
        }).catch(err => {
            return { status: "fail", message: "There is an error", data: err };
        });
    }
}

export default new UserType();