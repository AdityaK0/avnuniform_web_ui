import { useState } from 'react';
import { useToast } from '../../context/ToastContext.jsx';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    showToast("Thanks! We'll keep you updated on new uniform ranges and offers.");
    setEmail('');
  };

  return (
    <section className="newsletter" aria-labelledby="newsletter-heading">
      <div className="newsletter__inner">
        <div>
          <h2 id="newsletter-heading">Stay Updated</h2>
          <p>Get notified about new fabrics, styles and bulk-order offers from AVN Uniforms.</p>
        </div>
        <form onSubmit={handleSubmit} className="newsletter__form">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn--dark">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
