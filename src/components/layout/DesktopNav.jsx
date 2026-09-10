import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/nav.js';

export default function DesktopNav() {
  const [openIndex, setOpenIndex] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (openIndex === null) return undefined;

    const closeOnOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenIndex(null);
    };
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') setOpenIndex(null);
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [openIndex]);

  return (
    <nav className="desktop-nav" aria-label="Main navigation" ref={navRef}>
      <ul>
        {navLinks.map((link, i) =>
          link.dropdown ? (
            <li key={link.label} className="has-dropdown">
              <button
                type="button"
                className="nav-toggle"
                aria-expanded={openIndex === i}
                aria-haspopup="true"
                onClick={() => setOpenIndex((prev) => (prev === i ? null : i))}
              >
                {link.label}
                <svg
                  className="nav-toggle__chevron"
                  viewBox="0 0 12 8"
                  width="10"
                  height="7"
                  aria-hidden="true"
                >
                  <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <ul className={`nav-dropdown ${openIndex === i ? 'is-open' : ''}`}>
                {link.dropdown.map((sub) => (
                  <li key={sub.to}>
                    <NavLink to={sub.to} onClick={() => setOpenIndex(null)}>
                      {sub.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={link.to}>
              <NavLink to={link.to} className={({ isActive }) => (isActive ? 'is-active' : '')} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
