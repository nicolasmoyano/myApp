import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      borderBottom: '1px solid',
      borderColor: '#e0e0e0'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '100vw',
        padding: `1.4rem 4.5rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontFamily: `Open Sans`,
            fontSize: '1.5rem',
            fontWeight: 900,
            color: `#505050`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
