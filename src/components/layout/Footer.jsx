import { Link } from 'react-router-dom';
import { business } from '../../data/business.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link to="/" className="wordmark">
            AVN <span>Uniforms</span>
          </Link>
          <p>
            Corporate, hotel, industrial and promotional uniform solutions from Ahmedabad, Gujarat.
          </p>
          <div className="site-footer__social">
            <a href="#" aria-label="AVN Uniforms on Instagram (coming soon)" title="Instagram — coming soon" onClick={(e) => e.preventDefault()}>
              <InstagramIcon />
            </a>
            <a href="#" aria-label="AVN Uniforms on Facebook (coming soon)" title="Facebook — coming soon" onClick={(e) => e.preventDefault()}>
              <FacebookIcon />
            </a>
            <a href="#" aria-label="AVN Uniforms on WhatsApp (coming soon)" title="WhatsApp — coming soon" onClick={(e) => e.preventDefault()}>
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div className="site-footer__col">
          <h3>Shop</h3>
          <ul>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/category/corporate-uniforms">Corporate Uniforms</Link></li>
            <li><Link to="/category/hotel-uniforms">Hotel Uniforms</Link></li>
            <li><Link to="/category/industrial-workwear">Industrial Workwear</Link></li>
            <li><Link to="/category/promotional-apparel">Promotional Apparel</Link></li>
            <li><Link to="/category/caps-accessories">Caps</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/bulk-order">Bulk Orders</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Help</h3>
          <ul>
            <li><Link to="/contact">Shipping</Link></li>
            <li><Link to="/contact">Returns</Link></li>
            <li><Link to="/contact">FAQs</Link></li>
            <li><Link to="/bulk-order">Bulk Order Information</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Contact</h3>
          <address>
            AVN Uniforms<br />
            {business.address.city}, {business.address.state}<br />
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </address>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} AVN Uniforms. All rights reserved.</p>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2l1-3h-3v-2c0-.6.4-1 1-1z" fill="currentColor" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M8.5 8.5c.3 2.6 2.4 4.7 5 5l1-1.3-2-1-1 .8a5 5 0 0 1-2.5-2.5l.8-1-1-2-1.3 1z" fill="currentColor" />
    </svg>
  );
}
