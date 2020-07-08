// import request from '../index'

export function login({userName, password}) {
    password
    // return request.post('/login', {userName, password})
    return new Promise((resolve, reject) => {
        const success = Math.random() >= 0.1
        setTimeout(() => {
            success ? resolve({token: '{token}', userName}) : reject("mock login error")
        }, 2000);
    })
}