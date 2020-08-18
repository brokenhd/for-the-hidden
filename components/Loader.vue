<!-- The Site Loader -->

<template lang='pug'>

transition(name='fade')
  .loader(v-if='loading')
    h1 Loading

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script >
export default {
  data: () => ({
    loading: false
  }),

  methods: {
    start() {
      this.loading = true
    },
    finish() {
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.loader
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  display flex
  background white
  justify-content center
  align-items center

</style>
