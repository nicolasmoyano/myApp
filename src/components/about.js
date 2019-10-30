
import React from "react"
import AboutImage from "./aboutImage"


const About = () => (
  <div style={{ margin: '0 auto', display: 'flex', maxWidth: 1200, marginTop: '20vh' }}>
    <div style={{ flex: 1, margin: '0 auto', padding: '0rem 1rem'}}>
        <h2>Hi I’m Nicolas, a Swedish designer</h2>
        <p> with love for digital design, photography and front-end development. With the bag filled with several years of experience. I am keen in developing my knowledge of design and user experience. As the industry changes i try to change with it. I’m fascinated by the use of technology and design to bring different people and cultures together.</p>
        <p>I’m currently working at Utopia Music as a Digital Designer in Stockholm</p>
    </div>
    <div style={{ flex: 1, margin: '0 auto'}}>
        <AboutImage />

    </div>

  </div>
)

export default About