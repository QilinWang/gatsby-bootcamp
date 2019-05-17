import React from 'react'
// .. get out of the current page
import Layout from '../components/layout'
import Head from '../components/head'



const Contact = () => {
    return(
        <Layout>
            <Head title = "Contact" />
            <h1>Contact</h1>
            <p>qilin@qilinwang.org</p>
            <p>Or you can reach me on <a href="https://twitter.com/QilinWang3"> Twitter</a></p>
        </Layout>
    )
}
// link to twitter we can use <a> b/c it's not internal
export default Contact