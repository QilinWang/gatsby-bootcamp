const path = require('path')
/* module.exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions

    if (node.internal.type === "MarkdownRemark") {
        console.log(JSON.stringify(node,undefined,4))

        const slug = path.basename(node.fileAbsolutePath,'.md')
        // console.log('@@@@@@', slug)

        createNodeField({
            node, 
            name: "slug",
            value: slug
        })
    }

    // console.log(node)
} */


// createPages is gatsby Node API
module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    // path.resolve provide a partial path
    const blogTemplate = path.resolve('./src/templates/blog.js')

    // graphql is a function of string, 
/*     const res = await graphql(`
        query{
            allMarkdownRemark {
                edges {
                    node{
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `) */

        const res = await graphql(`
            query{
                allContentfulBlogPost {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
        `)

/*     res.data.allMarkdownRemark.edges.forEach((edge)=>{
        createPage({
            // 'component' is path to a component
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            // context is what we can pass to the template
            context:{
                slug: edge.node.fields.slug
                // kinda like a id
            }
        })
    }) */

    res.data.allContentfulBlogPost.edges.forEach((edge)=>{
        createPage({
            // 'component' is path to a component
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            // context is what we can pass to the template
            context:{
                slug: edge.node.slug
                // kinda like a id
            }
        })
    })
    

    // 1 get path to template

    // 2 get markdown data

    // 3 create new pages



}