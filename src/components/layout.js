import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCode } from '@fortawesome/free-solid-svg-icons'

import Header from './header'
import './layout.css'
import './layout-override.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <main
        style={{
          height: `100vh`,
          display: `grid`,
          gridTemplateRows: `90px 1fr`,
          overflow: `none`,
        }}
      >
        <Header
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        <div
          style={{
            display: `flex`,
            padding: `0px 2rem 1.45rem`,
          }}
        >
          {children}
        </div>
        <footer style={{ padding: `0px 2rem 1.45rem` }}>
          © 2018 | Designed with Adobe XD &amp; <FontAwesomeIcon icon={faCode} style={{width: `1.25rem`}}/>{' '} with{' '}
          <FontAwesomeIcon className="icon-heart" icon={faHeart}  style={{width: `1.25rem`}} />{' '}
          using <a href="https://www.gatsbyjs.org">Gatsby</a>.
        </footer>
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
