import React from 'react'
import './Home.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Home() {
  return (
    <div className='home container'>
        <div className="home-text">
        <h1>We Ensure better education for better world you know</h1>
        <p>Our education is differnt and unique we provide pratical knowleged rather than teory we focus on real world problem thats why we different oyher colleges if you know now you know</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
        

    </div>
  )
}

export default Home