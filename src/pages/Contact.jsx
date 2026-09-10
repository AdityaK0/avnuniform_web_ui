import Seo from '../components/common/Seo.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import ContactSection from '../components/common/ContactSection.jsx';
import { business } from '../data/business.js';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: business.name,
  url: business.website,
  email: business.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${business.address.line1}, ${business.address.line2}, ${business.address.line3}`,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.postalCode,
    addressCountry: 'IN',
  },
};

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact AVN Uniforms | Ahmedabad, Gujarat"
        description="Contact AVN Uniforms in Ahmedabad, Gujarat for corporate, hotel, industrial and promotional uniform inquiries."
        path="/contact"
        jsonLd={jsonLd}
        jsonLdId="contact"
      />

      <div className="page-header">
        <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
        <h1>Contact AVN Uniforms</h1>
      </div>

      <ContactSection />
    </>
  );
}
