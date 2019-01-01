import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, menuLinks }) => (
  <div
    style={{
      // background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        // margin: `0 auto`,
        // maxWidth: 960,
        padding: `1.45rem 2rem`,
      }}
    >
      <nav className="nav-main">
        <li>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `black`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </li>
        <div
          style={{
            display: `flex`,
            alignItems: `flex-end`,
          }}
        >
          {menuLinks.map((link, i) => (
            // console.log('link-->', link);
            <li key={i} className="menu-link">
              <h2>
                <Link to={link.link}>{link.name}</Link>
              </h2>
            </li>
          ))}
          <li><h2><a href="mailto:kevinespaldon@live.com">Say hi</a></h2></li>
        </div>
      </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
