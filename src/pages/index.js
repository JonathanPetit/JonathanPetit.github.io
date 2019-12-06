import React from "react"

import Layout from "../components/layout"
import Socials from "../components/socials";
import Picture from "../components/picture";
import Info from "../components/info"

import img from '../images/wallpaper.jpg'
import '../styles/index.css'

const IndexPage = () => (
  <Layout>
      <img  
        src={img}
        className='wallpaper'
  	    alt='Wallpaper'/>
      <div className='content'>
        <Picture/>
        <Info/>
        <Socials/>
      </div>
  </Layout>
  
)

export default IndexPage
