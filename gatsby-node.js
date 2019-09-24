const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
     {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              description
            }
            timeToRead
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          // Usa ordem invertida pq, em um blog, os posts são ordenados por data.
          previousPost: next,
          nextPost: previous
        },
      })
    })

    //Calculando o numero de paginas e arredondando para cima com ceil.
    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    //Criando um array com o numero de paginas e iterando com forEach
    Array.from({ length: numPages}).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve(`./src/templates/blog-list.js`),
        //context passa os dados para que fiquem disponiveis nas querys do graphiql como variaveis.
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1
        }
      });
    });
  })
}
