import React from 'react'
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'

import './socials.css'

const SOCIALS = [
  {url: 'https://github.com/JonathanPetit', icon: <FaGithub/>},
  {url: 'https://www.linkedin.com/in/jonathan-petit16', icon: <FaLinkedin/>},
  {url: 'mailto:petit.jonathan16@gmail.be', icon: <FaEnvelope/>},
]

const Socials = () => (
  <div>
    {
      SOCIALS.map(info => (
        <a
          target='_blank'
          rel="noopener noreferrer"
          href={info.url}
          key={info.url}>
            {info.icon}
        </a>
      ))
    }
  </div>
)

export default Socials