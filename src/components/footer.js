import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import footerStyles from './footer.module.scss'


// Do not forget the "query{}" bracket

const Footer = () =>{
    // note: data has to be inside the Footer() function!
    // o/w you would get a hook call error
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }

`)

    return(
        <footer className = {footerStyles.footer}>
            <p>Created by {data.site.siteMetadata.author}, 2019.</p>
        </footer>
    )
}

// <footer> is the root element
// you want to update 2020, just change this page!

export default Footer