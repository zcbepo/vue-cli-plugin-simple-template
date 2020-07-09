import axios from "axios"
import storage from "../utils/storage"
import Message from 'element-ui/packages/message/index'
import router from "../router"

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASEURL,
})

instance.interceptors.request.use(option => {
    const token = storage.get(storage.keys.TOKEN)
    if (token && option.url !== '/login') {
        option.headers.Authorization = token
    }
    return option
})
instance.interceptors.response.use(response => {
    return response
}, error => {
    const { status } = error.response
    if (status === 401) {
        router.replace({
            path: '/login',
            query: {
                redirect: router.currentRoute.path
            }
        })
        Message({message: "请重新登录"})
    } else {
        Message.error({message: error})
        return Promise.reject(error)
    }
})

export default instance
