const axios = require('axios').default;

const API_URL = "http://localhost:3030/users/";

class Auth {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        "email":email,
        "password":password
      })
      .then(response => {
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    window.location.href("/");
  }

  register(user) {
    return axios.post(API_URL, {user});
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new Auth();