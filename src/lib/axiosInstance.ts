import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://beachesapi.canarycode.es/api/v1",
});

export default axiosInstance;
