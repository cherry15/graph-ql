import React from 'react'
import LoremIpsum from '../components/lorem-ipsum/lorem-ipsum'
import pageStyles from './page.module.css'

const About = () => {
  return (
    <div className={`${pageStyles.page} ${pageStyles.about}`}>
      <h1>About Cats</h1>
      <p className={pageStyles.para}><LoremIpsum numberOfSentences={4} /></p>
      <p className={pageStyles.para}><LoremIpsum numberOfSentences={6} /></p>
    </div>
  )
}

export default About
