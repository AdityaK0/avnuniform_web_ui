import { Link } from 'react-router-dom';
import ProductImage from '../common/ProductImage.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Corporate · Hotel · Industrial · Promotional</p>
        <h1>Uniforms That Represent Your Brand</h1>
        <p className="hero__subheading">
          Premium corporate, promotional and industrial uniforms made for businesses.
        </p>
        <div className="hero__actions">
          <Link to="/shop" className="btn btn--dark btn--large">
            Shop Collection
          </Link>
          <Link to="/bulk-order" className="btn btn--outline btn--large">
            Get a Bulk Quote
          </Link>
        </div>
      </div>
      <div className="hero__media">
        <ProductImage
          image={{ label: 'AVN Uniforms — Corporate & Promotional Apparel', tone: 'primary' }}
          alt="AVN Uniforms corporate polo T-shirts and workwear collection"
          width={900}
          height={1000}
          loading="eager"
          className="hero__image hero__image--main"
        />
        <ProductImage
          image={{ label: 'Industrial Workwear', tone: 'secondary' }}
          alt="AVN Uniforms industrial workwear and boiler suit"
          width={420}
          height={480}
          loading="eager"
          className="hero__image hero__image--accent"
        />
      </div>
    </section>
  );
}
