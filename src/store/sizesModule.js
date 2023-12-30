export const sizesModule = {
  state: () => ({
    dimensions: [],
    selectedSize: {},
    selectedDimension: {}
  }),
  mutations: {
    setDimensions(state, payload) {
      state.dimensions = payload
    },
    setSelectedSize(state, payload) {
      state.selectedSize = payload
    },
    setSelectedDimension(state, payload) {
      state.selectedDimension = payload
    },
  },
  namespaced: true,
}
