import axios from "axios"
import storage from "../utils/storage"
import Message from 'element-ui/packages/message/index'

const instance = axios.create({
    baseURL: VUE_APP_BASEURL
})

instance.interceptors.request.use((option) => {
    const token = storage.get(storage.keys.TOKEN)
    if (token && option.url !== '/login') {
        option.headers.Authorization = token
    }
})
instance.interceptors.response.use((response) => {
    return response
}, (error) => {
    Message.error(error)
    return Promise.reject(error)
})

export default instance