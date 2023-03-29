import React from 'react'

import './Me.css'

import photo from '../../assets/images/photo.jpg'

const Me = () => {
  return (
    <section className='me'>
      <img className='me-photo' src={photo} alt='my profile picture'/>
      <div className='me-info'>
        <div className='me-info__name'>DMITRII SAPEGIN</div>
        <div className='me-info__location'>Yerevan</div>
        <div className='me-info__occupation'>Web Developer</div>
        <div className='me-info__description'>
          A multilingial web developer with the passion for linguistics, VR and vinyl.
        </div>
        <div className='me-info__tech'>
          HTML5 CSS3 JS React NodeJS Express Three.js
        </div>
      </div>
    </section>
  )
}

export default Me