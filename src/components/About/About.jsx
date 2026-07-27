import './About.css'

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <span className="section-label">About Us</span>
        <h2 className="section-title">Why Choose Hair Strip Salon?</h2>
        <div className="section-divider"></div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-number">01</div>
            <h3>Expert Stylists</h3>
            <p>Our team of professional stylists are trained in the latest techniques and trends to give you the perfect look.</p>
          </div>

          <div className="about-card">
            <div className="about-number">02</div>
            <h3>Premium Products</h3>
            <p>We use only top-quality hair products that are gentle on your hair while delivering stunning results.</p>
          </div>

          <div className="about-card">
            <div className="about-number">03</div>
            <h3>Relaxing Experience</h3>
            <p>Enjoy a comfortable and welcoming atmosphere where you can unwind while we take care of your hair.</p>
          </div>

          <div className="about-card">
            <div className="about-number">04</div>
            <h3>Quick Service</h3>
            <p>We value your time. Our efficient service ensures you get the best results without the long wait.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
