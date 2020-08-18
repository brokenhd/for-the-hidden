<!-- The site header -->

<template lang='pug'>

header.site-header
  nuxt-link(to='/')
    img(src='/brand-logo-v1.png')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script>
export default {

}
</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

header
  text-align center
  padding padding-l

img
  max-width 300px

</style>
