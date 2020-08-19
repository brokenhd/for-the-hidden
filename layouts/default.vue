<template lang='pug'>

  .layout
    site-header
    nuxt
    site-footer

</template>

<script>
import SiteHeader from '~/components/Header'
import SiteFooter from '~/components/Footer'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>

</style>
