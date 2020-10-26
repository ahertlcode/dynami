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
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password, firstname, lastname, email, phone, wallet_address, address) {
    return axios.post(API_URL, {
      username, password, firstname, lastname, email, phone, wallet_address, address
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new Auth();