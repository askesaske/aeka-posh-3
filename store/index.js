import Vuex from 'vuex';
import Vue from "vue";

const createStore = () => {
    return new Vuex.Store({
        state: {
            modalState: false,
            confEmail: ''
        },
        mutations: {
            setModalState(state, info) {
                state.modalState = info
            },
            setConfEmailState(state, info) {
                state.confEmail = info
            },
        },
        actions: {
            setModalState(vuexContext, modalState) {
                vuexContext.commit('setModalState', modalState)
            },
            setConfEmailState(vuexContext, confEmailState) {
                vuexContext.commit('setConfEmailState', confEmailState)
            },
        },
        getters: {
            loadedModalState(state) {
                return state.modalState
            },
            loadedConfEmailState(state) {
                return state.confEmail
            }
        }
    })
}

export default createStore
