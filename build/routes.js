// Deps
const config = require('../.contentful.json')
const contentful = require("contentful")

module.exports = {}

const client = contentful.createClient({
  space: config.CTF_SPACE_ID,
  accessToken: config.CTF_CDA_ACCESS_TOKEN
})

module.exports.forGenerate = () => {

  // Simple Routes
  let routes = [
    '/'
  ]

  // Articles
  allRoutes = Promise.all([
    articles = client.getEntries({
      content_type: 'blogPost'
    }),
    towers = client.getEntries({
      content_type: 'tower'
    })
  ]).then(([articles, towers]) => {
    routes.push(...articles.items.map(entry => "/articles/" + entry.fields.slug))
    routes.push(...towers.items.map(entry =>  {
      if (entry.fields.slug == "home") {
        return
      }
      return "/" + entry.fields.slug
    }))
    return routes
  }).catch(console.error)

  return allRoutes
}
