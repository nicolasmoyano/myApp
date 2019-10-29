import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ marginBottom: `1.45rem` }}>
    <h1 style={{ fontSize: `5.8rem`,
    lineHeight: '4.8rem',
    textAlign: `center`,
    maxWidth: 1200, margin: '0 auto', 
    verticalAlign: 'middle',
    padding: '25% 0'}}>Digital Art Direction <span style={{color: '#62EBFF'}}>&</span> Product design.</h1>
    </div>

    <div style={{ margin: '0 auto', verticalAlign: 'center' }}>
      <span >Scroll Down</span>
    </div>
  </Layout>
)

export default IndexPage
