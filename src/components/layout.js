import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from "./layout.module.scss"


const Layout = (props) => {
    return(
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>

            <Footer />
        </div>
    )
}

// props.children is the JSX b.t <Layout>
// @! Note: if const Layout and <return (Layout>  used together, it will hang.
// Need to investigate why they can't have the same name.

// <Footer /> outside <div>: sticky footer 
export default Layout