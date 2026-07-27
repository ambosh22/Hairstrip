import './Services.css'

const services = [
  {
    id: 1,
    title: 'Haircut & Styling',
    description: 'Expert cuts tailored to your face shape, lifestyle, and personal style. From classic to contemporary.',
    price: 'From PHP 250',
  },
  {
    id: 2,
    title: 'Hair Coloring',
    description: 'Full color, highlights, balayage, or ombre — we create the perfect shade to complement your skin tone.',
    price: 'From PHP 500',
  },
  {
    id: 3,
    title: 'Hair Treatment',
    description: 'Deep conditioning, keratin treatment, and hair spa to restore shine and vitality to your locks.',
    price: 'From PHP 350',
  },
  {
    id: 4,
    title: 'Hair Rebonding',
    description: 'Smooth, sleek, and straight hair that lasts. Professional rebonding for all hair types.',
    price: 'From PHP 1,500',
  },
  {
    id: 5,
    title: 'Perming',
    description: 'Add beautiful curls or waves with our gentle perming services that give natural-looking volume.',
    price: 'From PHP 800',
  },
  {
    id: 6,
    title: 'Bridal Hair',
    description: 'Special occasion styling that makes you feel like royalty. Trial sessions available for brides-to-be.',
    price: 'From PHP 1,000',
  },
]

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <span className="section-label">What We Offer</span>
        <h2 className="section-title">Our Services</h2>
        <div className="section-divider"></div>

        <div className="services-list">
          {services.map((service, index) => (
            <div className="service-item" key={service.id}>
              <div className="service-left">
                <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="service-info">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
              <div className="service-right">
                <span className="service-price">{service.price}</span>
                <a href="#contact" className="service-book" onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}>
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
