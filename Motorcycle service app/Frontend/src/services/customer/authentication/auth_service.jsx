import axios from "axios";

const AUTH_URL = "http://localhost:8088/customer/auth/";

class AuthService {
  constructor() {
    this.authenticated = false;
  }
  async login(email, password) {
    try {
      const response = await axios
        .post(AUTH_URL + "login", { email, password });
      if (response.data.token) {
        console.log(response.data.userId);
        this.authenticated = true;
        localStorage.setItem("customer", JSON.stringify(response.data));
      }
      return response.data;
    } catch (err) {
      console.log("Login Error: " + err);
      return err;
    }
  }

  logout() {
    this.authenticated = false;
    localStorage.removeItem("customer");
    console.log("Inside Logout Method");
  }

  register(name, email, password) {
    return axios.post(AUTH_URL + "register", {
      name,
      email,
      password,
    });
  }

  isAuthenticated() {
    return this.authenticated;
  }
  getCurrentCustomer() {
    return JSON.parse(localStorage.getItem("customer"));
  }
}

export default new AuthService();
