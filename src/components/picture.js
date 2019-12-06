import React from 'react'

import img from '../images/selfie.jpg'
import '../styles/picture.css'

const Picture = () => (
  <div>
    <img 
        src={img}
        className='picture'
  	    alt='Jonathan Petit'/>
  </div>
)

export default Picture