import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/nav.js';
import { business } from '../../data/business.js';

export default function MobileNav({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
    return undefined;
  }, [isOpen]);

  // Portalled to <body> so this fixed-position drawer isn't trapped inside
  // the header's containing block (backdrop-filter on .site-header would
  // otherwise re-anchor `position: fixed` descendants to the header's box).
  return createPortal(
    <>
      {isOpen && <div className="drawer-overlay" onClick={onClose} />}
      <nav
        className={`mobile-nav ${isOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="mobile-nav__header">
          <span className="wordmark">AVN Uniforms</span>
          <button type="button" onClick={onClose} aria-label="Close menu">
            ×
          </button>
        </div>
        <ul className="mobile-nav__links">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.label} className="mobile-nav__accordion">
                <details>
                  <summary>{link.label}</summary>
                  <ul>
                    {link.dropdown.map((sub) => (
                      <li key={sub.to}>
                        <NavLink to={sub.to} onClick={onClose}>
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={link.to}>
                <NavLink to={link.to} onClick={onClose} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
        <div className="mobile-nav__footer">
          <a href={`mailto:${business.email}`}>{business.email}</a>
          <a href={`tel:${business.phone}`}>{business.phone}</a>
          <p>{business.address.city}, {business.address.state}</p>
        </div>
      </nav>
    </>,
    document.body
  );
}
