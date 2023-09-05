import { BASE_URL_API } from "@/configs";
import axios from "axios";

const api = axios.create({
  baseURL: BASE_URL_API,
});

export default api;