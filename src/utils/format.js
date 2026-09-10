export function formatPrice(amount) {
  return `₹${Number(amount).toLocaleString('en-IN')}`;
}

export function slugifyBreadcrumbLabel(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
