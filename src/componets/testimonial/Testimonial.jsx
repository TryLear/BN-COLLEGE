import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


function Testimonial() {
  const slider = useRef();
  let tx=0;
  const slideforward=()=>{
    if(tx > -50){
      tx -= 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBack=()=>{
    if(tx < 0){
      tx += 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  return (
    <div className='testimonial'>
        
        <img src={back_icon} alt="" className='back' onClick={slideBack} />
        <img src={next_icon} alt="" className='next' onClick={slideforward} />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Willan Jackson</h3>
                    <span>Ellite,USA</span>
                  </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga in perspiciatis exercitationem vel eius minima explicabo, cupiditate ea, quod aliquid, dolor sit reprehenderit velit ratione eos voluptate saepe perferendis optio.</p>

              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Ahmad Khan</h3>
                    <span>Ellite,USA</span>
                  </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga in perspiciatis exercitationem vel eius minima explicabo, cupiditate ea, quod aliquid, dolor sit reprehenderit velit ratione eos voluptate saepe perferendis optio.</p>

              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Borean Whatt</h3>
                    <span>Ellite,USA</span>
                  </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga in perspiciatis exercitationem vel eius minima explicabo, cupiditate ea, quod aliquid, dolor sit reprehenderit velit ratione eos voluptate saepe perferendis optio.</p>

              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Jack Smith</h3>
                    <span>Ellite,USA</span>
                  </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga in perspiciatis exercitationem vel eius minima explicabo, cupiditate ea, quod aliquid, dolor sit reprehenderit velit ratione eos voluptate saepe perferendis optio.</p>

              </div>
            </li>
          </ul>
          

        </div>

    </div>
  )
}

export default Testimonial