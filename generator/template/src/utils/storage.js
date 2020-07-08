import { isObject } from "./utils"

const storage = {
    keys: {
        TOKEN: 'token',
        USERNAME: 'username',
        PASSWORD: 'password',
        CHECKED: 'checked'
    },
    set(k, v) {
        isObject(v) && (v = JSON.stringify(v))
        localStorage.setItem(k, v)
    },
    get(k) {
        return localStorage.getItem(k)
    },
    remove(k) {
        localStorage.removeItem(k)
    },
    clear() {
        localStorage.clear()
    }
}

export default storage