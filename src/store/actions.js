export default {
    updateLoca({ commit }, payload) {
        commit('setLoca', payload)
    },
    updateCurrentLang({ commit }, payload) {
        commit('setCurrentLang', payload)
    },
    updatePage({commit}, payload) {
        commit('setPage', payload)
    },
    updateOrderId({commit}, payload){
        commit('setOrderId', payload)
    },



    updateWrongId({commit}, payload){
        commit('setWrongId', payload)
    },




    updateServiceId({commit}, payload){
        commit('setServiceId', payload)
        
    },
    updateMin({commit}, payload){
        commit('setMin', payload)
        
    },
    updateMax({commit}, payload){
        commit('setMax', payload)
        
    },




    updateOrderBtn({commit}, payload){
        commit('setOrderBtn', payload)
    }
}