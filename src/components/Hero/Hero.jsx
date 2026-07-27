import { useState, useEffect, useRef } from 'react'
import video1 from '../../assets/fe2bc2b2-c063-4895-bb88-e926bdd61774.mp4'
import video2 from '../../assets/557e7442-0d40-4039-8fa0-a6b7c2d1ee25.mp4'
import video3 from '../../assets/be838dff-484d-4ee3-b4c5-c95b8a54014e.mp4'
import './Hero.css'

const videos = [video1, video2, video3]

function Hero() {
  const [current, setCurrent] = useState(0)
  const videoRefs = useRef([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === current) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [current])

  return (
    <section className="hero" id="home">
      <div className="hero-video-bg">
        {videos.map((src, i) => (
          <video
            key={i}
            ref={(el) => (videoRefs.current[i] = el)}
            src={src}
            loop
            muted
            playsInline
            className={`hero-video ${i === current ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-line"></div>
        <h1 className="hero-title">Hair Strip Salon</h1>
        <p className="hero-description">
          Where style meets sophistication. Experience premium hair care 
          and transformation that brings out your best look.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn btn-primary" onClick={(e) => {
            e.preventDefault()
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Our Services
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => {
            e.preventDefault()
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Book Now
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
