import storage from '../../utils/storage'
import router from '../../router/index'
import Message from 'element-ui/packages/message/index'
import * as UserRequset from '../../network/modules/user'

const {keys} = storage

export default {
    namespaced: true,
    state: () => ({
        fetching: false,
        userName: storage.get(storage.keys.USERNAME) // handle page refresh
    }),
    mutations: {
        SET_FETCHING(state, fetching) {
            state.fetching = fetching
        },
        SET_USERNAME(state, userName) {
            console.log('SET_USERNAME')
            state.userName = userName
        },
    },
    actions: {
        login({ commit }, { userName, password, checked }) {
            commit("SET_FETCHING", true)
            UserRequset.login({ userName, password }).then(data => {
                storage.set(keys.TOKEN, data.token)
                if (checked) {
                    storage.set(keys.USERNAME, userName)
                    storage.set(keys.PASSWORD, password)
                } else {
                    storage.remove(keys.USERNAME)
                    storage.remove(keys.PASSWORD)
                }
                storage.set(keys.CHECKED, checked)
                commit("SET_USERNAME", userName)
                router.replace('/')
            }).catch(err => {
                Message.error(err)
            }).finally(() => {
                commit("SET_FETCHING", false)
            })
        }
    },
}