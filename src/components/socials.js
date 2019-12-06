import React from 'react'
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

import '../styles/socials.css'

const SOCIALS = [
  {name: 'github', url: 'https://github.com/JonathanPetit', icon: <FaGithub/>, color: 'black'},
  {name: 'linkedin', url: 'https://www.linkedin.com/in/jonathan-petit16', icon: <FaLinkedin/>, color: '#2867b2'},
  {name: 'mail', url: 'mailto:petit.jonathan16@gmail.com', icon: <FaEnvelope/>, color: '#D44638'},
]

const Socials = () => (
  <div className='container-social'>
    {
      SOCIALS.map(info => (
        <a
          target='_blank'
          className='socials'
          rel='noopener noreferrer'
          href={info.url}
          key={info.name}>
          <IconContext.Provider value={{ color: info.color, size: '45px' }}>
            {info.icon}
          </IconContext.Provider>
        </a>
      ))
    }
  </div>
)



export default Socials