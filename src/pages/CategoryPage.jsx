import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Seo from '../components/common/Seo.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import ProductGrid from '../components/product/ProductGrid.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { getCategoryBySlug } from '../data/categories.js';
import { getProductsByCategory } from '../data/products.js';
import { business } from '../data/business.js';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  const products = useMemo(() => {
    if (!category) return [];
    return getProductsByCategory(category.match);
  }, [category]);

  if (!category) {
    return (
      <div className="page-header">
        <EmptyState
          title="Category not found"
          message="This uniform category doesn't exist or may have moved."
          actionLabel="Browse All Products"
          actionTo="/shop"
        />
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`${category.name} | AVN Uniforms`}
        description={`${category.description} Explore ${category.name.toLowerCase()} from AVN Uniforms, Ahmedabad.`}
        path={`/category/${category.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: business.website },
            { '@type': 'ListItem', position: 2, name: category.name, item: `${business.website}/category/${category.slug}` },
          ],
        }}
        jsonLdId="category"
      />

      <div className="page-header">
        <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Shop', to: '/shop' }, { label: category.name }]} />
        <h1>{category.name}</h1>
        <p className="page-header__description">{category.description}</p>
      </div>

      <div className="container category-page-body">
        <p className="shop-toolbar__count category-toolbar">
          {products.length} {products.length === 1 ? 'product' : 'products'}
        </p>

        <ProductGrid products={products} />
      </div>
    </>
  );
}
