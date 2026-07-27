import { useState, useRef } from 'react'
import './Features.css'

const reels = [
  { id: 1, url: 'https://www.facebook.com/reel/1487731209245142', title: 'Hair Transformation' },
  { id: 2, url: 'https://www.facebook.com/reel/4139147766357645', title: 'Styling Session' },
  { id: 3, url: 'https://www.facebook.com/reel/4228453764108708', title: 'Color Works' },
  { id: 4, url: 'https://www.facebook.com/reel/1168066211450852', title: 'Client Review' },
  { id: 5, url: 'https://www.facebook.com/reel/1658649714751895', title: 'Salon Highlights' },
  { id: 6, url: 'https://www.facebook.com/reel/649909405728502', title: 'Fresh Look' },
  { id: 7, url: 'https://www.facebook.com/reel/2119962572176735', title: 'Makeover' },
]

function Features() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  const scroll = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const amount = 300
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="features section" id="features">
      <div className="container">
        <span className="section-label">Latest from Facebook</span>
        <h2 className="section-title">Featured Videos</h2>
        <div className="section-divider"></div>

        <div className="features-carousel-wrapper">
          <button
            className={`features-arrow features-arrow-left ${canScrollLeft ? '' : 'hidden'}`}
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="features-carousel" ref={scrollRef} onScroll={checkScroll}>
            {reels.map((reel) => (
              <div className="features-card" key={reel.id}>
                <div className="features-video">
                  <iframe
                    title={reel.title}
                    src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(reel.url)}&width=400`}
                    width="400"
                    height="710"
                    style={{ border: 'none', overflow: 'hidden', width: '100%', height: '100%' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <p className="features-label">{reel.title}</p>
              </div>
            ))}
          </div>

          <button
            className={`features-arrow features-arrow-right ${canScrollRight ? '' : 'hidden'}`}
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features
