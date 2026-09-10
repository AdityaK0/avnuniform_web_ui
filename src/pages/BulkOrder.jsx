import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/common/Seo.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import LoadingState from '../components/common/LoadingState.jsx';
import { submitBulkOrder } from '../services/bulkOrderService.js';
import { products } from '../data/products.js';
import { business } from '../data/business.js';

const FABRIC_OPTIONS = ['No preference', 'PC Cotton', 'Spun Matty', 'Honeycomb Pique', 'Dry-Fit', 'Micro Polyester', 'Cotton Twill', 'Poly-Viscose Blend', 'Heavy Duty Cotton Twill'];

export default function BulkOrder() {
  const location = useLocation();
  const prefillProduct = location.state?.productName || '';
  const prefillMessage = location.state?.cartSummary
    ? `Items I'm interested in:\n${location.state.cartSummary}`
    : '';

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: prefillProduct,
    quantity: '',
    fabric: FABRIC_OPTIONS[0],
    customization: '',
    message: prefillMessage,
  });
  const [status, setStatus] = useState('idle');
  const [referenceId, setReferenceId] = useState(null);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const result = await submitBulkOrder(form);
    if (result.ok) {
      setReferenceId(result.referenceId);
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <>
      <Seo
        title="Request a Bulk Uniform Quote | AVN Uniforms"
        description="Request a bulk quote for corporate, hotel, industrial or promotional uniforms from AVN Uniforms, Ahmedabad."
        path="/bulk-order"
      />

      <div className="page-header">
        <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Bulk Order' }]} />
        <h1>Request a Bulk Uniform Quote</h1>
        <p className="page-header__description">
          Tell us about your team and requirements, and AVN Uniforms will get back to you with fabric,
          pricing and customization options.
        </p>
      </div>

      {status === 'success' ? (
        <div className="bulk-order__success">
          <h2>Thank you, {form.name.split(' ')[0] || 'there'}!</h2>
          <p>
            Your inquiry has been recorded with reference <strong>{referenceId}</strong>. Our team will
            reach out to you at <strong>{form.email}</strong> to discuss fabric, pricing and quantity.
          </p>
          <p>
            In the meantime, you can also reach us directly at{' '}
            <a href={`mailto:${business.email}`}>{business.email}</a>.
          </p>
          <Link to="/shop" className="btn btn--dark">
            Continue Browsing
          </Link>
        </div>
      ) : (
        <form className="bulk-order-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="bo-name">Name *</label>
            <input id="bo-name" required value={form.name} onChange={handleChange('name')} />
          </div>
          <div className="form-row">
            <label htmlFor="bo-company">Company Name</label>
            <input id="bo-company" value={form.company} onChange={handleChange('company')} />
          </div>
          <div className="form-row form-row--split">
            <div>
              <label htmlFor="bo-email">Email *</label>
              <input id="bo-email" type="email" required value={form.email} onChange={handleChange('email')} />
            </div>
            <div>
              <label htmlFor="bo-phone">Phone *</label>
              <input id="bo-phone" type="tel" required value={form.phone} onChange={handleChange('phone')} />
            </div>
          </div>
          <div className="form-row form-row--split">
            <div>
              <label htmlFor="bo-product">Product</label>
              <select id="bo-product" value={form.product} onChange={handleChange('product')}>
                <option value="">Select a product</option>
                {products.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
                <option value="Other / Multiple products">Other / Multiple products</option>
              </select>
            </div>
            <div>
              <label htmlFor="bo-quantity">Quantity *</label>
              <input
                id="bo-quantity"
                type="number"
                min="1"
                required
                value={form.quantity}
                onChange={handleChange('quantity')}
                placeholder="e.g. 50"
              />
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="bo-fabric">Preferred Fabric</label>
            <select id="bo-fabric" value={form.fabric} onChange={handleChange('fabric')}>
              {FABRIC_OPTIONS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="bo-customization">Customization Requirements</label>
            <input
              id="bo-customization"
              value={form.customization}
              onChange={handleChange('customization')}
              placeholder="e.g. Logo embroidery on chest, company colours"
            />
          </div>
          <div className="form-row">
            <label htmlFor="bo-message">Message</label>
            <textarea
              id="bo-message"
              rows={5}
              value={form.message}
              onChange={handleChange('message')}
              placeholder="Tell us more about your requirement, timeline, or sizing needs."
            />
          </div>

          <button type="submit" className="btn btn--dark btn--large" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting…' : 'Submit Inquiry'}
          </button>
          {status === 'submitting' && <LoadingState label="Sending your inquiry…" />}
        </form>
      )}
    </>
  );
}
