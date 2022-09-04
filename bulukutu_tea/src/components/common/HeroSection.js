import React from 'react'
import '../../styles/hero.css'

export default function HomePage3() {
  return (
    <div className='hero-container'>
        <video className='vid' src={require("../../images/video.mp4")} autoPlay loop muted/>
        <h1>Refreshing at every sip</h1>
        <div className='hero-btns'>
            <button className='btn btn-outline btn-large btn-mobile'>Shop Now</button>
            <button className='btn btn-dark btn-large btn-mobile'>
                <i className="bi bi-play-circle"/>
            </button>
        </div>
    </div>
  )
}
