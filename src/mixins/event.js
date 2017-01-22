export default {
  mounted () {
    this.$rubik.bridge.sub(this.events)
  },

  beforeDestroy () {
    this.$rubik.bridge.unsub(this.events)
  }
}