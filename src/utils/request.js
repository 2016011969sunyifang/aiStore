import axios from "axios";
import { Toast, Notify } from 'vant';

// import router from './../router/index';
// import {
//   MessageBox,
//   Message
// } from "element-ui";
import store from "@/store";
import {
    getToken
} from "@/utils/auth";

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (message) => {
    Notify({ type: 'danger', message: message, duration: 5 * 1000 });
}

// define request times(to confirm all request has done)
let requestCount = 0
let loading

// (before request) show loading

function showLoading() {
    if (requestCount === 0) {
        loading = Toast.loading({ message: '努力加载中 ...', duration: 0, });
    }
    requestCount++
}

let timer
// // (after response) try to hide loading
function tryHideLoading() {
    requestCount--
    // to resolve two request lead to loading flashing
    timer = setTimeout(() => {
        if (requestCount === 0) {
            loading.clear()
            clearTimeout(timer)
        }
    })
}

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 5000, // request timeout
    withCredentials: true

})

// request interceptor
service.interceptors.request.use(
    config => {
        showLoading()
        // console.log(store.getters.token);
        // alert(getToken());
        if (store.getters.token) {
            // alert(getToken());
            config.headers["Authorization"] = 'Bearer' + ' ' + getToken();
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        tryHideLoading();
        const res = response.data
        // 如果自定义代码不是200，则判断为错误.
        if (res.code !== 200) {
            errorHandle(res.message);
            return Promise.reject(new Error(res.message || "Error"))
        } else {
            return res
        }
    },
    error => {
        tryHideLoading();
        errorHandle(error.response.data.message);
        return Promise.reject(error)
    },

)

export default service