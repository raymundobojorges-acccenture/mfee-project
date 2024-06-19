import axios from "axios";

const axiosInstance = axios.create();
const token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmlkQG91dGxvb2suY29tIiwiaWF0IjoxNzE4Nzg3NjM3LCJleHAiOjE3MTg3OTEyMzd9.rDm4lewYLIsjbLNYM1oNjCzhlwaYMKYmm3S4eEBanuw"
axiosInstance.interceptors.request.use((config) => {
  config.baseURL = "https://test.neuraac.com/api";
  config.headers.Authorization = `Bearer ${token}`;
  config.signal = AbortSignal.timeout(5000);
  return config;
});

export default axiosInstance;
