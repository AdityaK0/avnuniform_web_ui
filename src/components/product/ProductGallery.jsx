import { useState } from 'react';
import ProductImage from '../common/ProductImage.jsx';

export default function ProductGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <ProductImage
          image={active}
          alt={`AVN Uniforms ${productName} — ${active.label}`}
          width={800}
          height={1000}
          loading="eager"
        />
      </div>
      {images.length > 1 && (
        <div className="product-gallery__thumbs" role="tablist" aria-label="Product images">
          {images.map((img, i) => (
            <button
              key={img.label}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              className={`product-gallery__thumb ${i === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              <ProductImage image={img} alt={`${productName} thumbnail ${i + 1}`} width={150} height={188} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
