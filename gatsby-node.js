// const path = require(`path`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allDataJson {
//         edges {
//           node {
//             components {
//               header {
//                 logoURL
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   createPage({
//     path: "/home",
//     component: path.resolve(`./src/components/templates/blog-post.js`),
//     context: {
//       data: result,
//     },
//   })
//   console.log(JSON.stringify(result, null, 4))
// }
