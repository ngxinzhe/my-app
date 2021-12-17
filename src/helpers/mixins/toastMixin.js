export default {
  methods: {
    showToast(title, msg) {
      this.$bvToast.toast(msg, {
        title: title,
      })
    },
  },
}
