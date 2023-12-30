export const contactModalModule = {
  state: () => ({
    isContactModalOpened: false,
  }),
  mutations: {
    OPEN_CONTACT_MODAL(state) {
      state.isContactModalOpened = true
    },
    CLOSE_CONTACT_MODAL(state) {
      state.isContactModalOpened = false
    },
  },
  namespaced: true  
}
