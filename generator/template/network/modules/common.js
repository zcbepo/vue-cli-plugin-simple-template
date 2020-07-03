import instace from '../index'
import api from '../api'

export const login = (username, pwd) => {
    // return instace.post(api.login, {username: username, password: pwd})
    return Promise.resolve({
        data: {
            token: 'uaioij141ionoiasiobgnasfa'
        }
    })
}