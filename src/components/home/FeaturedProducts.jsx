import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../../data/products.js';
import ProductGrid from '../product/ProductGrid.jsx';

export default function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="featured-products" aria-labelledby="featured-heading">
      <div className="section-heading">
        <h2 id="featured-heading">Featured Products</h2>
        <p>Popular fabrics and styles across our uniform range.</p>
      </div>
      <ProductGrid products={products} />
      <div className="featured-products__cta">
        <Link to="/shop" className="btn btn--outline">
          View All Products
        </Link>
      </div>
    </section>
  );
}
