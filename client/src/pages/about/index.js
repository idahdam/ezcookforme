import React from 'react'
import { Helmet } from "react-helmet";
import { AboutUsHeroComponent, AboutUsBody } from '../../components'

const About = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>EZCOOKFORME: About Us Page</title>
      </Helmet>
      <AboutUsHeroComponent />
      <AboutUsBody identification={'1'} />
      <AboutUsBody identification={'2'} />
      <AboutUsBody identification={'3'} />
    </>
  )
}

export default About;
