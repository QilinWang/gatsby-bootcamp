import React from 'react'
// .. get out of the current page
import Layout from '../components/layout'
import Head from '../components/head'
import pageStyle from '../components/page.module.scss'




const Contact = () => {
    return(
        <Layout>
            <Head title = "Contact" />
            <h1 className = {pageStyle.header}>Contact</h1>
            <h3 className = {pageStyle.paragraph} >By <a className = {pageStyle.a} href="mailto:qilin@qilinwang.org">Email</a></h3>
            <h3 className = {pageStyle.paragraph}>Or you can reach me at <a className = {pageStyle.a} href="https://twitter.com/QilinWang3"> Twitter</a>.</h3>
        </Layout>
    )
}
// link to twitter we can use <a> b/c it's not internal
export default Contact