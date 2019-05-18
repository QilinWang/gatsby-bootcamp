import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import pageStyle from '../components/page.module.scss'




const AboutPage = ()=>{
    return(
        <Layout>
            <Head title = "About" />
            <h1 className = {pageStyle.header}>About</h1>
            <h3 className = {pageStyle.paragraph}>This is my personal blog site. </h3>
            <h3 className = {pageStyle.paragraph}>You are welcome to <Link className = {pageStyle.a} to="/contact">contact me</Link>.</h3>
            <h3 className = {pageStyle.paragraph}> 
                The site is built using <a className = {pageStyle.a} href="https://www.gatsbyjs.org">GatsbyJS</a>,  
                and the content is written with <a className = {pageStyle.a} href="https://www.contentful.com">Contentful</a> and deployed by <a className = {pageStyle.a} href="https://www.netlify.com">Netlify</a>. 
            </h3>
        </Layout>
    )
}

export default AboutPage