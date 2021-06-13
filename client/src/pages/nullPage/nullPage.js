import React from 'react'
import { Helmet } from 'react-helmet'
import './index.css'
import ReactPlayer from 'react-player'

const NullPage = () => {

  return (
    <div className="body-of-nullpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>EZCOOKFORME: 404 Page</title>
      </Helmet>

      
      <h1 className="fourOfourText">😅😅Welcome to Page <code className="code-404">404</code>😅😅</h1>
      <h2 className="fourOfourText">The Page Doesn't Exist</h2>
      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          width='850px'
          height='480px'
          playing={true}
        />
    </div>
  )
}

export default NullPage;
