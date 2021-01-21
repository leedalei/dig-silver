import axios from "axios";

const http = axios.create({
  baseURL: "/",
  timeout: 30000 // 请求超时时间
});

export default http;
