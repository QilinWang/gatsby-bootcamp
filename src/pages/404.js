import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import pageStyle from '../components/page.module.scss'


const NotFound = () => {
    return(
      <Layout>
            <Head title = "404" />
            <h1 className = {pageStyle.header}>Page not found</h1>
            <p><Link to = "/">Head home</Link></p>
      </Layout>
    )
}

export default NotFound