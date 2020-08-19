<!-- The Tower -->

<template lang='pug'>

.tower.max-w
  h1(v-if='tower.title') {{ tower.title }}
  .wysiwyg(
    v-if='body'
    v-html='body')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script>
import { createClient } from '~/plugins/contentful.js'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
const client = createClient()

export default {
  asyncData ({ params }) {
    return Promise.all([
      client.getEntries({
        'content_type': 'tower',
        'fields.slug': params.tower || 'home',
        include: 4
      })
    ]).then(tower => {
      return {
        tower: tower[0].items[0].fields,
        body: documentToHtmlString(tower[0].items[0].fields.body)
      }
    }).catch(console.error)
  }
}
</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>



</style>
