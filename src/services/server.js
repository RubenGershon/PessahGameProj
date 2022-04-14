import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080",
});

async function signup(signUpDataObj) {
  console.log("SignedIn!!");
}

async function login(email, password) {
  console.log("LoggedIn!!");
}

export { signup, login };
