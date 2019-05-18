import React from "react"
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import pageStyle from '../components/page.module.scss'



const IndexPage =() => {

    return(
        <Layout>
            <Head title = "Home"/>
            <h1 className = {pageStyle.header}>Welcome</h1>
            <h2 className = {pageStyle.subheader}>I'm Qilin, a graduate student living in the beautiful Montreal. </h2>
            <h2 className = {pageStyle.subheader}>I </h2>
            <h3 className = {pageStyle.paragraph}>Need a developer? <Link className = {pageStyle.a} to="/contact">Contact me</Link></h3>
            


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