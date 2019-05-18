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
            <h4>
                This is my personal blog site. 
                I plan to blog about statistics, #rstats, data visualisation  and all the data science stuff.
            </h4>
            <h4>
                I wish to blog with short and clear English. However, it is my understanding that my training as a high school student in China forced upon me a second 
                nature to write meaningless long sentence that is not only unnecessary but also difficult to read at any time, without 
                which I could not possibly have done so well in my TOEFL exam. Or did I?
            </h4>
            <h4>
                Other things I love to talk about are news, history and politics.
            </h4>

            <h4>You are welcome to <Link className = {pageStyle.a} to="/contact">contact me</Link>.</h4>
            <h4> 
                The site is built using <a className = {pageStyle.a} href="https://www.gatsbyjs.org">GatsbyJS</a>,  
                and the content is written with <a className = {pageStyle.a} href="https://www.contentful.com">Contentful</a> and deployed by <a className = {pageStyle.a} href="https://www.netlify.com">Netlify</a>. 
            </h4>
        </Layout>
    )
}

export default AboutPage