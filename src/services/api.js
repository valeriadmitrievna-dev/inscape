import axios from "axios";

const instance = axios.create({
  baseURL:
  process.env.REACT_APP_API_PIPELINE === "production"
      ? process.env.REACT_APP_API_URL_ORIGIN
      : process.env.REACT_APP_API_URL_DEV,
  responseType: "json",
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("Access Token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default instance;
