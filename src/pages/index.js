import React from "react"
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'



const IndexPage =() => {
    return(
        <Layout>
            <Head title = "Home"/>
            <h1>Hello.</h1>
            <h2>I'm Qilin, a graduate student living in the beautiful Montreal </h2>
            <p>Need a developer?<Link to="/contact">Contact me</Link></p>

        </Layout>
    )


}
// standard anchor: <a href="/contact">Contact me</a>
// import {Link} ... , <Link to="/contact">

export default IndexPage








// Note:
/*     <Layout> replaces the following:
        return(
        <div>
            <Header />
            <h1>Hello.</h1>
            <h2>I'm Qilin, a graduate student living in the beautiful Montreal </h2>
            <p>Need a developer?<Link to="/contact">Contact me</Link></p>
            <Footer />
        </div>
    ) */

// install gatsby-plugin-sass