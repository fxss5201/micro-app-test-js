export default {
  install (thisArg) {
    thisArg.$bus.$on('setBusToken', (val) => {
      thisArg.$store.commit('tokenModule/setToken', val)
    })
  }
}
