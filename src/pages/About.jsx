import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h2>글 목록</h2>
        <Link to="/product/1?best=true">만</Link>
        <hr/>
        <Link to="/product/2">토</Link>
        <hr/>
        <Link to="/product/3">벤</Link>
    </div>
  )
}

export default About