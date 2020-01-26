import axios from "axios";
import Vue from "vue";
// 创建axios实例
const service = axios.create();

// request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    return Promise.resolve(response.data);
  },
  error => {
    console.log("err" + error); // for debug
    if (error.response.status == 504) {
      console.log("服务器错误...");
    }
    return Promise.reject(error);
    // return Promise.reject(error)
  }
);

export default service;
