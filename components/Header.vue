<!-- The site header -->

<template lang='pug'>

header.site-header.max-w
  nuxt-link(to='/')
    img(src='/brand-logo-v1.png')

  header-navigation.header-menu

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script>
import HeaderNavigation from '~/components/navigation/HeaderNavigation'

export default {
  components: {
    HeaderNavigation
  }
}
</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

header
  position relative
  text-align center
  padding padding-l
  display flex
  align-items center

img
  max-width 300px

.header-menu
  margin-left auto

</style>
