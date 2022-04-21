import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080",
});

async function signup(signUpDataObj) {
  const response = await api.post("/auth/signup", signUpDataObj);
  console.log(response);
  return response.data;
}

async function login(email, password) {
  const response = await api.post("/auth/login", { email, password });
  console.log(response);
  return response.data;
}

export { signup, login };
