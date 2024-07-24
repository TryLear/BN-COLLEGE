import React, { useRef } from 'react'
import './Video.css'
import video from '../../assets/7971025-uhd_3840_2160_24fps.mp4'

function Video({play, setPlay}) {
    const player =useRef(null)
    const closePlayer=(e)=>{
        if(e.target=== player.current){
            setPlay(false)
        }
    }
  return (
    <div className={`video ${play?'':"hide"}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls ></video>

    </div>
  )
}

export default Video