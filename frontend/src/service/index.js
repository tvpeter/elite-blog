import axios from "axios";

const ApiService = axios.create({
  baseURL: "https://elite-backend-hac.herokuapp.com",
});

export default ApiService;
