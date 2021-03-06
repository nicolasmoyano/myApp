import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import About from '../components/about'
import HeroSection from '../components/heroSection'

const IndexPage = () => (
  <Layout>
  <SEO title="Home" />
    <HeroSection />
    <About />
  </Layout>
)

export default IndexPage
