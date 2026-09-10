import { Link } from 'react-router-dom';

export default function BulkOrderCTA() {
  return (
    <section className="bulk-cta" aria-labelledby="bulk-cta-heading">
      <div className="bulk-cta__inner">
        <h2 id="bulk-cta-heading">Need Uniforms for Your Team?</h2>
        <p>
          Tell us what you need and we&rsquo;ll help you choose the right fabric, style and quantity.
        </p>
        <div className="bulk-cta__actions">
          <Link to="/bulk-order" className="btn btn--dark btn--large">
            Request a Quote
          </Link>
          <Link to="/contact" className="btn btn--outline btn--large">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
