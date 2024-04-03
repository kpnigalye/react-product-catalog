import axios from "axios";
import { getBaseUrl } from "./helper";
import { API_REQUEST_TIMEOUT } from "../constants";

const axiosInstance = axios.create({
  baseURL: getBaseUrl(),
  timeout: API_REQUEST_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
