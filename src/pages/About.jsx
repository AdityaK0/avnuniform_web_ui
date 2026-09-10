import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';

export default function About() {
  return (
    <>
      <Seo
        title="About Us | AVN Uniforms"
        description="AVN Uniforms is a uniform and promotional apparel supplier based in Ahmedabad, Gujarat, working with businesses on corporate, hotel, industrial and promotional uniform needs."
        path="/about"
      />

      <div className="page-header">
        <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />
        <h1>About AVN Uniforms</h1>
      </div>

      <section className="prose-section">
        <p>
          AVN Uniforms provides professional uniform and promotional apparel solutions for businesses in
          Ahmedabad and across India. From corporate polo shirts and promotional T-shirts to hotel
          uniforms and industrial workwear, we help businesses create a consistent and professional
          appearance for their teams.
        </p>
        <p>
          We work directly with offices, hotels, restaurants, factories, schools and event organisers to
          supply uniforms and branded apparel suited to each industry — whether that means a breathable
          polo for front-desk staff, a tailored uniform set for hospitality teams, or a durable boiler
          suit for the factory floor.
        </p>
        <p>
          Our product range spans multiple fabric options — including PC Cotton, Spun Matty, Honeycomb
          Pique, Dry-Fit and Micro Polyester — so businesses can choose the right balance of comfort,
          durability and budget for their team. Uniforms can be customised with logo embroidery or
          printing, and we work with businesses on bulk quantity requirements.
        </p>
        <h2>Based in Ahmedabad, Gujarat</h2>
        <p>
          AVN Uniforms is based at Laxmi Nagar Complex, Shahwadi Narol, Ahmedabad, and supplies uniforms
          and promotional apparel to businesses in Ahmedabad, across Gujarat, and beyond.
        </p>
      </section>

      <WhyChooseUs />

      <section className="prose-section prose-section--cta">
        <h2>Looking to Outfit Your Team?</h2>
        <p>Get in touch to discuss fabric, styling and bulk pricing for your business.</p>
        <div className="prose-section__actions">
          <Link to="/bulk-order" className="btn btn--dark">
            Request a Quote
          </Link>
          <Link to="/contact" className="btn btn--outline">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
