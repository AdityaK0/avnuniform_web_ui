import { homeCategories } from '../../data/categories.js';
import CategoryCard from './CategoryCard.jsx';

export default function CategoryGrid() {
  return (
    <section className="category-grid-section" aria-labelledby="shop-by-category-heading">
      <div className="section-heading">
        <h2 id="shop-by-category-heading">Shop by Category</h2>
        <p>Find the right uniform range for your team or business.</p>
      </div>
      <div className="category-grid">
        {homeCategories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  );
}
