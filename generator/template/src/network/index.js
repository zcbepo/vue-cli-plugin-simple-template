import axios from 'axios'
import apis from './api'
import {localStorageKeys, localStorageUtils} from '../utils/localstorage'

const instanse = axios.create({
    baseURL: process.env.API_URL,
    timeout: 2500
})

instanse.interceptors.request.use(
    config => {
        if (config.url != apis.login) {
            const token = localStorageUtils.get(localstorageKeys.token)
            config.headers.Authorization = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

instanse.interceptors.response.use(
    response => {
        const code = response.status
        switch (code) {
            case 200:
                return response;
            case 401:
                //Todo 处理无权限问题，(刷新token/跳转至登录页)
                break;
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instanse