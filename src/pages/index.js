import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: 1200, marginBottom: `1.45rem` }}>
    <h1 style={{ fontSize: `5rem`, textAlign: `center`}}>Digital Art Direction & Product design.</h1>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
