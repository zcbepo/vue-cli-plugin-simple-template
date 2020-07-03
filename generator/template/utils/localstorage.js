export const localStorageKeys = {
    token: "token"
}

export const localStorageUtils = {
    set(key, value) {
        localStorage.setItem(key, value)
    },
    get(key) {
        return localStorage.getItem(key)
    },
    remove(key) {
        return localStorage.removeItem(key)
    },
    clear() {
        return localStorage.clear()
    }
}