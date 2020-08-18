<!-- Post List -->

<template lang='pug'>

.posts-list
  nuxt-link.post(
    v-for='{ fields } in posts'
    :key='fields.id'
    :to='"/articles/" + fields.slug')
    .title {{ fields.title }}

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script>
export default {
  props: {
    posts: Array
  }
}
</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>



</style>
