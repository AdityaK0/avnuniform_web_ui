import { useParams, Link } from 'react-router-dom';
import Seo from '../components/common/Seo.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import ProductGallery from '../components/product/ProductGallery.jsx';
import ProductInfo from '../components/product/ProductInfo.jsx';
import RelatedProducts from '../components/product/RelatedProducts.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { getProductBySlug, getRelatedProducts } from '../data/products.js';
import { getCategoryBySlug } from '../data/categories.js';
import { business } from '../data/business.js';
import { placeholderImage } from '../utils/placeholderImage.js';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="page-header">
        <EmptyState
          title="Product not found"
          message="This product may have been removed or the link is incorrect."
          actionLabel="Browse All Products"
          actionTo="/shop"
        />
      </div>
    );
  }

  const primaryCategory = getCategoryBySlug(product.categories[0]);
  const related = getRelatedProducts(product);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: placeholderImage({ label: product.images[0].label, tone: product.images[0].tone }),
    description: product.description,
    sku: product.sku,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.price,
      availability: `https://schema.org/${product.availability}`,
      url: `${business.website}/product/${product.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: business.website },
      primaryCategory && {
        '@type': 'ListItem',
        position: 2,
        name: primaryCategory.name,
        item: `${business.website}/category/${primaryCategory.slug}`,
      },
      {
        '@type': 'ListItem',
        position: primaryCategory ? 3 : 2,
        name: product.name,
        item: `${business.website}/product/${product.slug}`,
      },
    ].filter(Boolean),
  };

  return (
    <>
      <Seo
        title={`${product.name}${product.gsm ? ` ${product.gsm} GSM` : ''} | AVN Uniforms`}
        description={product.shortDescription}
        path={`/product/${product.slug}`}
        jsonLd={[jsonLd, breadcrumbJsonLd]}
        jsonLdId="product"
      />

      <div className="page-header">
        <Breadcrumbs
          trail={[
            { label: 'Home', to: '/' },
            { label: 'Shop', to: '/shop' },
            ...(primaryCategory ? [{ label: primaryCategory.name, to: `/category/${primaryCategory.slug}` }] : []),
            { label: product.name },
          ]}
        />
      </div>

      <article className="product-detail">
        <ProductGallery images={product.images} productName={product.name} />
        <ProductInfo product={product} />
      </article>

      <section className="product-detail__tabs" aria-label="Product information">
        <div className="product-detail__tab-block">
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>

        <div className="product-detail__tab-block">
          <h2>Specifications</h2>
          <table className="spec-table">
            <tbody>
              {product.specifications.map((spec) => (
                <tr key={spec.label}>
                  <th scope="row">{spec.label}</th>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="product-detail__tab-block">
          <h2>Suitable For</h2>
          <ul className="tag-list">
            {product.suitableFor.map((use) => (
              <li key={use}>{use}</li>
            ))}
          </ul>
        </div>

        <div className="product-detail__tab-block">
          <h2>Care Instructions</h2>
          <ul>
            {product.careInstructions.map((instr) => (
              <li key={instr}>{instr}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="product-detail__bulk-cta">
        <h2>Ordering for a Team?</h2>
        <p>
          Contact AVN Uniforms for customization, branding and bulk pricing on {product.shortName || product.name}.
        </p>
        <Link to="/bulk-order" state={{ productName: product.name }} className="btn btn--dark">
          Request Bulk Quote
        </Link>
      </section>

      <RelatedProducts products={related} />
    </>
  );
}
