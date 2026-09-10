import { Link } from 'react-router-dom';
import ProductImage from '../common/ProductImage.jsx';

export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.slug}`} className="category-card">
      <div className="category-card__media">
        <ProductImage
          image={{ label: category.name, tone: 'secondary' }}
          alt={`AVN Uniforms ${category.name}`}
          width={500}
          height={600}
        />
      </div>
      <div className="category-card__label">
        <h3>{category.name}</h3>
        <span>Shop Now →</span>
      </div>
    </Link>
  );
}
