import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'
import blogStyle from './blog.module.scss'
import Head from '../components/head'
import pageStyle from '../components/page.module.scss'



//  goals L link to blog post
// 1, fetch the slug for posts
// 2, use slug to generate a link to the post page
// 3, test your work

// render contentful posts
// 1 swap out the markdown query
// 2 update the compnent 


const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(
            sort: {
                fields:
                    publishedDate
                order: 
                    DESC
            }
            )
            {
            edges{
                node{
                    title
                    slug
                    publishedDate(formatString:"MMMM Do, YYYY")
                }
            }
            
            }
        }

    `)

    

    return (
        <Layout>
            <Head title="Blog" />
            <h1 className = {pageStyle.header}>Blog</h1>
            <ol className = {blogStyle.posts}>{data.allContentfulBlogPost.edges.map((edge) => {
                return(
                    <li className={blogStyle.post}>
                        <Link to={`/blog/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.publishedDate}</p>

                        </Link>
                    </li>

                ) 
            })}
            </ol>
        </Layout>
    )
}
// ... .edges.map(arrow function). Careful about the parenthesis

export default BlogPage

/* allMarkdownRemark{
    edges{
        node{
            frontmatter{
                title
                date
            }
            html
            excerpt
            fields{
                slug
            }
        }
    }
} */


