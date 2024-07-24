import React, { useEffect,useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'
import {Link} from 'react-scroll'


function Navbar() {
  const [sticky, setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false)
    })
  },[])
  const [mobile,setMobile]=useState(false);
  const toggle = () =>{
    mobile ? setMobile(false) : setMobile(true)

  }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobile?'': 'menu-hide'}>
            <li><Link to='home' smooth={true} offset={0} duration={500} >Home</Link> </li>
            <li> <Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li> <Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li> <Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li> <Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
            <li> <Link to='contact' smooth={true} offset={-260} duration={500}> <button className='btn'>Contact Us</button></Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggle} />

    </nav>
  )
}

export default Navbar