import axios from "axios";
import Vue from "vue";
// 请求超时时间
axios.defaults.timeout = 10000;
// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.data.success === true) {
      return Promise.resolve(response);
    } else {
      Vue.prototype.$message.error(response.data.msg);
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  (error) => {
    Vue.prototype.$message.error(error.msg);
    return Promise.reject(error);
  }
);

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
// const toLogin = () => {
//   router.replace({
//     path: '/login',
//     query: {
//       redirect: router.currentRoute.fullPath
//     }
//   })
// }

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
// const errorHandle = (status, other) => {
//   // 状态码判断
//   switch (status) {
//     // 401: 未登录状态，跳转登录页
//     case 401:
//       toLogin()
//       break
//       // 403 token过期
//       // 清除token并跳转登录页
//     case 403:
//       tip('登录过期，请重新登录')
//       localStorage.removeItem('token')
//       store.commit('loginSuccess', null)
//       setTimeout(() => {
//         toLogin()
//       }, 1000)
//       break
//       // 404请求不存在
//     case 404:
//       tip('请求的资源不存在')
//       break
//     default:
//       console.log(other)
//   }
// }

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
