import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/nav.js';

export default function DesktopNav() {
  return (
    <nav className="desktop-nav" aria-label="Main navigation">
      <ul>
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} className={({ isActive }) => (isActive ? 'is-active' : '')} end={link.to === '/'}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
