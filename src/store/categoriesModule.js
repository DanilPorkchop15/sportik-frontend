import axios from 'axios'
import store from '.'

export const categoriesModule = {
  state: () => ({
    categories: [],
    categoryTitle: '',
    categoryCode: '',
    categoryToDelete: {},
  }),
  getters: {},
  mutations: {
    setCategories(state, data) {
      state.categories = data
    },
    setCategoryTitle(state, data) {
      state.categoryTitle = data
    },
    setCategoryCode(state, data) {
      state.categoryCode = data
    },
    setCategoryToDelete(state, data) {
      state.categoryToDelete = data
    },
  },
  actions: {
    async getCategories({ commit }) {
      try {
        const response = await axios.get(`${store.state.apiURL}/category`)
        commit('setCategories', response.data)
      } catch (error) {
        console.error('Ошибка при получении категорий:', error)
      }
    },
    async deleteCategory({ dispatch, state, commit }) {
      try {
        await axios.delete(
          `${store.state.apiURL}/category/${state.categoryToDelete.id}`
        )
        dispatch('getCategories')
        commit('setCategoryToDelete', state.categories[0])
      } catch (error) {
        console.error('Ошибка при удалении категорий:', error)
      }
    },
    async postCategory({ dispatch, state, commit }) {
      try {
        await axios.post(
          `${store.state.apiURL}/category`,
          {
            id: 0,
            title: state.categoryTitle,
            code: state.categoryCode,
          }
        )
        dispatch('getCategories')
        commit('setCategoryTitle', '')
        commit('setCategoryCode', '')
      } catch (error) {
        console.error('Ошибка при добавлении категорий:', error)
      }
    },

  },
  namespaced: true,
}
