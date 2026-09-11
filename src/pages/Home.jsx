import Seo from '../components/common/Seo.jsx';
import Hero from '../components/home/Hero.jsx';
import CategoryGrid from '../components/home/CategoryGrid.jsx';
import FeaturedProducts from '../components/home/FeaturedProducts.jsx';
import BusinessSolutions from '../components/home/BusinessSolutions.jsx';
import BulkOrderCTA from '../components/home/BulkOrderCTA.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import ProductCategoriesStrip from '../components/home/ProductCategoriesStrip.jsx';
import NewsletterSection from '../components/common/NewsletterSection.jsx';
import { business } from '../data/business.js';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: business.name,
  url: business.website,
  email: business.email,
  telephone: business.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${business.address.line1}, ${business.address.line2}, ${business.address.line3}`,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.postalCode,
    addressCountry: 'IN',
  },
  description:
    'AVN Uniforms provides corporate uniforms, hotel uniforms, industrial workwear, promotional T-shirts and custom uniform solutions from Ahmedabad, Gujarat.',
};

export default function Home() {
  return (
    <>
      <Seo
        title="AVN Uniforms | Corporate, Hotel & Industrial Uniforms in Ahmedabad"
        description="AVN Uniforms provides corporate uniforms, hotel uniforms, industrial workwear, promotional T-shirts and custom uniform solutions from Ahmedabad, Gujarat."
        path="/"
        jsonLd={jsonLd}
        jsonLdId="home"
      />
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <BusinessSolutions />
      <BulkOrderCTA />
      <WhyChooseUs />
      <ProductCategoriesStrip />

      <section className="about-teaser" aria-labelledby="about-teaser-heading">
        <div className="about-teaser__inner">
          <h2 id="about-teaser-heading">About AVN Uniforms</h2>
          <p>
            AVN Uniforms provides professional uniform and promotional apparel solutions for businesses
            in Ahmedabad and across India. From corporate polo shirts and promotional T-shirts to hotel
            uniforms and industrial workwear, we help businesses create a consistent and professional
            appearance for their teams.
          </p>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
