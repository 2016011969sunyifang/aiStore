import Cookies from 'js-cookie'
import userreeq from './../../api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
    token: getToken(),
    showLog:true,
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_DIALOG:(state, boo) => {
    state.showLog = boo
  }
}

const actions = {
    // user login
    Login({ commit },code) {
      return new Promise((resolve, reject) => {
        userreeq.Login({code}).then(response => {
          const { data:{token} } = response;
          commit('SET_TOKEN', token);
          setToken(token);
          resolve();
        }).catch(error => {
          reject(console.log(error));
        })
      })
    },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
