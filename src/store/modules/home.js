import home from 'd:/work/aistore/src/api/Home'
const state = {
    addressList: '',
}

const mutations = {
    SET_ADDRESS_LIST: (state, addressList) => {
        state.addressList = addressList;
    },
}

const actions = {
    // get addressList
    getAddressList({
        commit
    }) {
        return new Promise((resolve, reject) => {
            home.getAddressList().then(response => {
                const {
                    data
                } = response;
                commit('SET_ADDRESS_LIST', data)
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