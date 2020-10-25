const axios = require('axios').default;

const API_URL = "http://localhost:3001/api/auth";


const register = (username, email, password) => {
    return axios.post(API_URL+"signup", {
        username, email, password
    });
}

const login = (user_name, password) => {
    return axios.post(API_URL+"signin", {
        user_name, 
        password
    }).then((response) => {
        if(response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
}

const logout = () => {
    localStorage.removeItem("user");
}

export default { register, login, logout };