<!-- The Header Navigation -->

<template lang='pug'>

.header-navigation
  .hamburger(
    @click='open = !open'
    :class='{ open: open }')
    .line
    .line
    .line

  transition(name='fade')
    .overlay(
      v-if='open'
      @click='open = !open')

  transition(name='slide-in-from-right')
    .menu(v-if='open')
      nuxt-link(to='/') Home
      nuxt-link(to='/about') About
      nuxt-link(to='/articles') Articles
      a(href='https://teespring.com/stores/for-the-hidden' target="_blank") Store
      nuxt-link(to='/contact') Contact

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script>
export default {
  data: () => {
    return {
      open: false
    }
  },
  watch: {
    '$route': {
      immediate: true,
      deep: true,
      handler() {
        this.open = false
      }
    }
  }
}
</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.overlay
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background rgba(white, 0.8)

.hamburger
  position relative
  width 20px
  height 15px
  display flex
  flex-direction column
  justify-content space-between
  cursor pointer

.line
  width 100%
  height 3px
  background #303030

.menu
  position fixed
  top 0
  right 0
  bottom 0
  width 250px
  max-width 100%
  padding padding-l * 2
  background teal
  box-shadow 0px 0px 5px 15px rgba(0,0,0,0.01)
  display flex
  flex-direction column
  justify-content center
  align-items flex-end

a
  position relative
  font-size 40px
  line-height 120px
  color white
  text-decoration none
  transition color 0.3s ease-in-out

  &:hover
    color #303030

  &:not(:last-of-type):after
    content ''
    display block
    position absolute
    right 0
    width 100px
    height 1px
    background white

</style>
