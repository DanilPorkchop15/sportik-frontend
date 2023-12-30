import axios from 'axios'
import store from '.'

export const productsModule = {
  state: () => ({
    products: [],
    product: {},
  }),

  actions: {
    async getProducts({ commit }) {
      try {
        const response = await axios.get(`${store.state.apiURL}/product`)
        commit('setProducts', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async postProduct({ commit, state }) {
      try {
        const response = await axios.post(
          `${store.state.apiURL}/product`,
          state.product
        )
        commit('setProducts', response.data)
      } catch (error) {
        console.log(error)
      }
    },
  },

  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
  },
  namespaced: true,
}
