import * as React from 'react'
import './Footer.css'

const Footer: React.FC<{}> = () => {

  return (
    <div className="footer">
      <div className='footer__name'>
        <div className='footer__name'>Mitya Sapegin</div>
      </div>
      <div className='footer__socials'>
        <div className='footer__social'>
          <a className='footer__link' href="" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className='footer__link' href="" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div className='footer__social'>
          <a className='footer__link' href="" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className='footer__link' href="" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </div>
  )
}

export default Footer