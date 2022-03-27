import axios from "axios";

const ApiService = axios.create({
  baseURL: "http://localhost:5001",
});

export default ApiService;
