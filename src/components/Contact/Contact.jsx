import './Contact.css'

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Contact Us</h2>
        <div className="section-divider"></div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div className="contact-item-text">
                <h4>Phone</h4>
                <a href="tel:09289656466">0928 965 6466</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-item-text">
                <h4>Email</h4>
                <a href="mailto:zandrei07@icloud.com">zandrei07@icloud.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-item-text">
                <h4>Location</h4>
                <p>801 Tolentino Compound,<br/>Rizal St. Poblacion, Mangaldan<br/>Behind Verons Shoe Square</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="contact-item-text">
                <h4>Business Hours</h4>
                <p>Monday - Sunday</p>
              </div>
            </div>
          </div>

          <form className="contact-form" name="booking" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={(e) => {
            e.preventDefault()
            const form = e.target
            const name = form.querySelector('[name="name"]').value
            const phone = form.querySelector('[name="phone"]').value
            const service = form.querySelector('[name="service"]').value
            const appointmentDate = form.querySelector('[name="appointment-date"]').value
            const message = form.querySelector('[name="message"]').value

            const subject = encodeURIComponent(`Appointment Booking - ${service}`)
            const body = encodeURIComponent(
              `Hello Hair Strip Salon,\n\n` +
              `Name: ${name}\n` +
              `Phone: ${phone}\n` +
              `Service: ${service}\n` +
              `Appointment Day: ${appointmentDate}\n` +
              `Message: ${message}\n\n` +
              `Thank you!`
            )
            window.open(`mailto:zandrei07@icloud.com?subject=${subject}&body=${body}`, '_blank')
          }}>
            <input type="hidden" name="form-name" value="booking" />
            <p className="hidden" style={{ display: 'none' }}>
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Name</label>
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-field">
                <label className="form-label">Contact Number</label>
                <input type="tel" name="phone" placeholder="Phone Number" required />
              </div>
            </div>
            <div className="form-field">
              <label className="form-label">Service</label>
              <select name="service" required defaultValue="">
                <option value="" disabled>Select a Service</option>
                <option>Haircut & Styling</option>
                <option>Hair Coloring</option>
                <option>Hair Treatment</option>
                <option>Hair Rebonding</option>
                <option>Perming</option>
                <option>Bridal Hair</option>
              </select>
            </div>
            <div className="form-field">
              <label className="form-label">Preferred Appointment</label>
              <input type="date" name="appointment-date" required />
            </div>
            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea name="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Book Appointment</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
