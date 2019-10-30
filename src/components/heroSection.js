import React from "react"

const HeroSection = () => (
<div>
<div style={{ marginBottom: `1.45rem` }}>
  <h1 style={{ fontSize: `5.8rem`,
  lineHeight: '4.8rem',
  textAlign: `center`,
  maxWidth: 1200, margin: '0 auto', 
  verticalAlign: 'middle',
  paddingTop: '20%',
  paddingBottom: '15%'}}>Digital Art Direction <span style={{color: '#62EBFF'}}>&</span> Product design.</h1>
  <span>
      <svg style={{
          width: '2.5rem',
          display: 'block',
          margin: '0 auto',
          transform: 'translate(-50%, -50%) rotate(90deg)'}}
          id="arrow-long" image-rendering="auto" baseProfile="basic" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 62 35"><rect fill="#505050" x="0" y="14.7" width="55.2" height="4.55"></rect><g transform="translate(40.9 0)"><path fill="#505050" d="M.35 3L14.3 17.2 0 31.25 3.35 34.25 20.85 17.15 3.5 0 .35 3Z"></path></g>
      </svg>
  </span>
</div>
</div>
)

export default HeroSection