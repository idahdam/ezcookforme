import React from 'react'
import { Helmet } from 'react-helmet';
import { HomeHeroComponent, HomeBody } from '../../components'

const Home = () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EZCOOKFORME: From Homecooks to Homecooks.</title>
      </Helmet>
      <HomeHeroComponent />
      <HomeBody identification={'1'}  />
      <HomeBody identification={'2'}  />
    </>
  )
}

export default Home;