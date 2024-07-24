import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play from '../../assets/play-icon.png'

function About({setPlay}) {
  return (
    <div className='about'>
       <div className="about-left">
        <img src={about} alt="" className='about-img' />
        <img src={play} alt="" className='play-img' onClick={()=>{
          setPlay(true)
        }} />
       </div>
       <div className="about-right">
        <h3>About College</h3>
        <h2>Enhance Your Future With BN College</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil alias numquam aut libero ab nesciunt deleniti natus impedit sequi officia?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos in magnam aut assumenda laborum aliquam dicta tempore, saepe eius vero beatae vitae blanditiis cupiditate animi qui provident eligendi numquam. Earum beatae animi, quos commodi recusandae veniam eveniet aut eaque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure id fugit quae exercitationem itaque earum mollitia suscipit, illum labore quam cumque ab debitis, voluptatem quas totam ipsam, excepturi modi.</p>
       </div>

    </div>
  )
}

export default About