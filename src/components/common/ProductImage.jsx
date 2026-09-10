import { placeholderImage } from '../../utils/placeholderImage.js';

export default function ProductImage({ image, alt, width = 800, height = 1000, loading = 'lazy', className = '' }) {
  const src = placeholderImage({
    label: image?.label || alt || 'AVN Uniforms',
    tone: image?.tone || 'primary',
    width,
    height,
  });

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      className={`product-image ${className}`.trim()}
    />
  );
}
