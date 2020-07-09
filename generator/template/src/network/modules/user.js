import request from '../index'

export function login({userName, password}) {
    return request.post('/login', {userName, password})
}

export function logout() {
    return request.post('/logout')
}
