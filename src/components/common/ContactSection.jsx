import { business } from '../../data/business.js';

export default function ContactSection() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-section__grid">
        <div className="contact-section__details">
          <h2 id="contact-heading">Get in Touch</h2>
          <p>
            Have a question about fabrics, sizing or a bulk order? Reach out and our team will help you
            choose the right uniform solution.
          </p>

          <dl>
            <div>
              <dt>Address</dt>
              <dd>
                {business.address.line1}
                <br />
                {business.address.line2}
                <br />
                {business.address.line3}
                <br />
                {business.address.city}, {business.address.state} {business.address.postalCode}
                <br />
                {business.address.country}
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                {business.phone ? (
                  <a href={`tel:${business.phone}`}>{business.phone}</a>
                ) : (
                  <span className="contact-section__placeholder">
                    Phone number coming soon — please email us to get in touch.
                  </span>
                )}
              </dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>
                {business.whatsapp ? (
                  <a
                    href={`https://wa.me/${business.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                ) : (
                  <span className="contact-section__placeholder">
                    WhatsApp number coming soon — please email us to get in touch.
                  </span>
                )}
              </dd>
            </div>
          </dl>

          <a href={`mailto:${business.email}`} className="btn btn--dark">
            Email Us
          </a>
        </div>

        <div className="contact-section__map">
          <iframe
            title="AVN Uniforms location map"
            src={business.mapsEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={`Map showing AVN Uniforms location at ${business.addressSingleLine}`}
          />
        </div>
      </div>
    </section>
  );
}
