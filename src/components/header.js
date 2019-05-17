import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'


const Header = ()=>{
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title,
                    author
                }
            }
        }
    `)

    return(
        <header className={headerStyles.header}>
            <h1>
                <Link className = {headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <h2>{data.site.siteMetadata.author}'s Blog Site</h2>
            <nav>
                <ul className = {headerStyles.navList}>
                    <li>
                        <Link className ={headerStyles.navItem_1} activeClassName = {headerStyles.active_navItem_1} to="/">Home</Link>
                    </li>
                    <li>
                        <Link  className ={headerStyles.navItem_2}  activeClassName = {headerStyles.active_navItem_2} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link  className ={headerStyles.navItem_1} activeClassName = {headerStyles.active_navItem_1}  to="/about">About</Link>
                    </li>
                    <li>
                        <Link  className ={headerStyles.navItem_2} activeClassName = {headerStyles.active_navItem_2}  to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
// css module: className ={headerStyles.link} 
export default Header