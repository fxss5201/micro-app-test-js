export default {
  install (thisArg) {
    thisArg.$bus.$on('setBusToken', (val) => {
      thisArg.$bus.token = val
      thisArg.$store.commit('tokenModule/setToken', val)
    })
  }
}
