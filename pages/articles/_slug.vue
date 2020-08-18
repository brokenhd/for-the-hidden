<!-- The Article Detail -->

<template lang='pug'>

.article
  h1 {{ post.fields.title }}
  .wysiwyg(v-html='$md.render(post.fields.body)')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  asyncData ({ params }) {
    return Promise.all([
      client.getEntries({
        content_type: 'blogPost',
        'fields.slug[match]': params.slug
      })
    ]).then((post) => {
      return {
        post: post[0].items[0]
      }
    }).catch(console.error)
  }
}
</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>



</style>
