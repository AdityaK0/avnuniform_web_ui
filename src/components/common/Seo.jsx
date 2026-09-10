import { useEffect } from 'react';
import { business } from '../../data/business.js';

const SITE_NAME = business.name;
const BASE_URL = business.website;

function setMetaTag(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id, data) {
  let el = document.head.querySelector(`script[data-jsonld="${id}"]`);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-jsonld', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Renders no DOM — imperatively manages <head> tags so every route can
 * ship unique, crawlable metadata without pulling in a helmet library.
 */
export default function Seo({
  title,
  description,
  path = '/',
  image,
  noindex = false,
  jsonLd = null,
  jsonLdId = 'page',
}) {
  useEffect(() => {
    const fullTitle = title ? `${title}` : SITE_NAME;
    document.title = fullTitle;

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    const canonical = `${BASE_URL}${path === '/' ? '' : path}`;
    setLinkTag('canonical', canonical);

    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonical);
    if (image) setMetaTag('property', 'og:image', image);

    setMetaTag('name', 'twitter:card', image ? 'summary_large_image' : 'summary');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    if (image) setMetaTag('name', 'twitter:image', image);

    setJsonLd(jsonLdId, jsonLd);

    return () => {
      setJsonLd(jsonLdId, null);
    };
  }, [title, description, path, image, noindex, jsonLd, jsonLdId]);

  return null;
}
