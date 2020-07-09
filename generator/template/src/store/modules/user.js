import storage from '../../utils/storage'
import router from '../../router/index'
// import Message from 'element-ui/packages/message/index'
import * as UserRequset from '../../network/modules/user'

const {keys} = storage

export default {
    namespaced: true,
    state: () => ({
        fetching: false,
        nickName: storage.get(keys.NICKNAME) // handle page refresh
    }),
    mutations: {
        SET_FETCHING(state, fetching) {
            state.fetching = fetching
        },
        SET_USERNAME(state, nickName) {
            state.nickName = nickName
        },
    },
    actions: {
        async login({ commit }, { userName, password, checked }) {
            commit("SET_FETCHING", true)
            const res = await UserRequset.login({ userName, password })
            const {token, nickName} = res.data
            storage.set(keys.TOKEN, token)
            storage.set(keys.NICKNAME, nickName)
            if (checked) {
                storage.set(keys.USERNAME, userName)
                storage.set(keys.PASSWORD, password)
            } else {
                storage.remove(keys.USERNAME)
                storage.remove(keys.PASSWORD)
            }
            storage.set(keys.CHECKED, checked)
            commit("SET_USERNAME", nickName)
            commit("SET_FETCHING", false)
            return Promise.resolve(!!token)
        },
        logout() {
            UserRequset.logout().then(res => {
                const {success} = res.data
                if (success) {
                    storage.remove(keys.TOKEN)
                    router.replace('/login')
                }
            })
        }
    },
}
