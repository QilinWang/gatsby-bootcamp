import React from 'react'
import Layout from '../components/layout'
import {graphql } from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
import blogStyle from '../components/blog.module.scss'


// note below markdownRemark is () not {}, so this is a filter operation
/* export const query = graphql`
    query($slug: String!){
        markdownRemark(
            fields: {
                slug: {
                    eq: $slug
                }
            }
        ) {
            frontmatter{
                title
                date
            }
            html
        }
    }
` */
// after 'export', gaysby is going to run grab this query and run it

export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq:$slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body{
                json
            }
        }
    }
`

const Blog = (props) => {

// confused: where does props get transmitted in? 
// A: this is in the blog template

// what is props.data? It is the response from the previous query
  /*   return(
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    ) */

    // to add pics inline from contentful
    const options = {// paseed to 2nd arg of function call of json
        renderNode: {//customize how certain node type are rendered
            "embedded-asset-block": (node)=>{
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }

    // documentToReactComponents is plugin to call json style rich text
    return(
        <Layout>
            <Head title = {props.data.contentfulBlogPost.title} />
            <h1 className={blogStyle.header}>{props.data.contentfulBlogPost.title}</h1>
            <p className={blogStyle.date}>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            
        </Layout>
    )
}
// dangerouslySetInnerHTML will set markup with a html string
// remember double {{}}. The reason is ...? 
export default Blog

