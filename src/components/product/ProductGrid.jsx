import { useState } from 'react';
import ProductCard from './ProductCard.jsx';
import QuickView from './QuickView.jsx';
import EmptyState from '../common/EmptyState.jsx';

export default function ProductGrid({ products, columns }) {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  if (!products.length) {
    return (
      <EmptyState
        title="No products found"
        message="Try adjusting your filters or search to find what you're looking for."
        actionLabel="View all products"
        actionTo="/shop"
      />
    );
  }

  return (
    <>
      <div className={`product-grid ${columns ? `product-grid--${columns}` : ''}`.trim()}>
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={setQuickViewProduct}
            loading={i < 4 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </>
  );
}
