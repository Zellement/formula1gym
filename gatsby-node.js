exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query PageQuery {
      allPrismicPage {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)
  data.allPrismicPage.edges.forEach(edge => {
    actions.createPage({
      path: edge.node.uid,
      component: require.resolve(`./src/templates/page-standard.js`),
      context: { slug: edge.node.uid },
    })
  })
}
