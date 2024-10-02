import { createStore } from 'vuex'

export default createStore({
  state: {
    stickers: [],
  },
  getters: {
    stickers: state => state.stickers
  },
  mutations: {
    add(state, sticker) {
      state.stickers.push(sticker)
    },
    remove(state, index) {
      state.stickers.splice(index, 1)
    },
    load(state, stickers) {
      state.stickers = stickers
    }
  },
  actions: {
    load({ commit }) {
      const savedStickers = JSON.parse(localStorage.getItem('stickers')) || []
      commit('load', savedStickers)
    },
    add({state, commit}, sticker) {
      commit('add', sticker)
      localStorage.setItem('stickers', JSON.stringify(state.stickers))
    },
    remove({state, commit}, index) {
      commit('remove', index)
      localStorage.setItem('stickers', JSON.stringify(state.stickers))
    },
    saveAll({state}) {
      localStorage.setItem('stickers', JSON.stringify(state.stickers))
    }
  }
})