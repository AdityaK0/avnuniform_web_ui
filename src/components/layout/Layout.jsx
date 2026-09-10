import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AnnouncementBar from './AnnouncementBar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MobileBottomNav from './MobileBottomNav.jsx';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
