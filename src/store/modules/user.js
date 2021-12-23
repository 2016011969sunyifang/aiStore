import userInFo from './../../api/userInfo'
const state = {
    integral_mall:'',
    integral_paid:'',
    integral:'',
    user_info:{},
}

const mutations = {
    SET_INTEGRAL_MALL: (state, integral_mall) => {
        state.integral_mall = integral_mall;
    },
    SET_INTEGRAL_PAID: (state, integral_paid) => {
        state.integral_paid = integral_paid;
    },
    SET_INTEGRAL: (state, integral) => {
        state.integral = integral;
    },
    SET_USER_INFO: (state, user_info) => {
        state.user_info = user_info;
    },
}

const actions = {
    // get addressList
    getUserInfo({
        commit
    }) {
        return new Promise((resolve, reject) => {
            userInFo.getCellList().then(response => {
                const {
                    data
                } = response;
                commit('SET_USER_INFO', data);
                commit('SET_INTEGRAL_MALL', data.integral_mall);
                commit('SET_INTEGRAL_PAID', data.integral_paid);
                commit('SET_INTEGRAL', data.integral);
                console.log(data);
                resolve(data)
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