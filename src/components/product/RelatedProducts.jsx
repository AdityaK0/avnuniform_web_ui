import ProductGrid from './ProductGrid.jsx';

export default function RelatedProducts({ products }) {
  if (!products.length) return null;

  return (
    <section className="related-products" aria-labelledby="related-heading">
      <h2 id="related-heading">You May Also Like</h2>
      <ProductGrid products={products} />
    </section>
  );
}
