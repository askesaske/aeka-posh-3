import Vuex from 'vuex';
import Vue from "vue";

const createStore = () => {
    return new Vuex.Store({
        state: {
            modalState: false
        },
        mutations: {
            setModalState(state, info) {
                state.modalState = info
            },
        },
        actions: {

            setModalState(vuexContext, modalState) {
                vuexContext.commit('setModalState', modalState)
            },
        },
        getters: {
            loadedModalState(state) {
                return state.modalState
            },
        }
    })
}

export default createStore
