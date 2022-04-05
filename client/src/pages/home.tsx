import React from 'react'
import CustomButton from '../components/custom-button/custom-button'
import LoremIpsum from '../components/lorem-ipsum/lorem-ipsum'
import pageStyles from './page.module.css'

const Home = () => {
  const openFeature = (event: React.MouseEvent<HTMLInputElement>): void => {
    event.preventDefault()
    console.log('open')
  }
  return (
    <div className={pageStyles.page}>
      <div className={pageStyles.mainFeature}>
        <div className={pageStyles.mainInfo}>
          <h2>Cats in space?</h2>
          <p className={pageStyles.para}>
            <LoremIpsum numberOfSentences={4} />
          </p>
          <CustomButton
            type='button'
            value='Find out more'
            onClick={openFeature}
          />
        </div>
      </div>
      <div className={pageStyles.subFeatureContainer}>
        <div className={pageStyles.subFeature}>
          <img src='https://res.cloudinary.com/dety84pbu/image/upload/v1598474100/famous_cats_epuqcr.jpg' alt='cat' className={pageStyles.subFeatureImage} />
          <h3>Lorem ipsum dolor</h3>
          <p className={pageStyles.para}>
            <LoremIpsum numberOfSentences={4} />
          </p>
        </div>
        <div className={pageStyles.subFeature}>
          <img src='https://res.cloudinary.com/dety84pbu/image/upload/v1598474100/famous_cats_epuqcr.jpg' alt='cat' className={pageStyles.subFeatureImage} />
          <h3>At tellus at urna</h3>
          <p className={pageStyles.para}>
            <LoremIpsum numberOfSentences={4} />
          </p>
        </div>
        <div className={pageStyles.subFeature}>
          <img src='https://res.cloudinary.com/dety84pbu/image/upload/v1598474100/famous_cats_epuqcr.jpg' alt='cat' className={pageStyles.subFeatureImage} />
          <h3>Solor sit amet</h3>
          <p className={pageStyles.para}>
            <LoremIpsum numberOfSentences={4} />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
