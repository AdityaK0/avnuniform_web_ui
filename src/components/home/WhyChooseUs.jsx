const REASONS = [
  {
    title: 'Multiple Fabric Options',
    description: 'Choose from PC Cotton, Spun Matty, Honeycomb, Dry-Fit, Micro and more to match your budget and use case.',
  },
  {
    title: 'Custom Branding',
    description: 'Logo embroidery and printing to carry your business identity across every uniform.',
  },
  {
    title: 'Bulk Orders',
    description: 'Ordering for a full team or a large event? We work with quantity-based requirements.',
  },
  {
    title: 'Corporate & Industrial Apparel',
    description: 'From office polos to factory-floor boiler suits, one supplier for your entire uniform range.',
  },
  {
    title: 'Professional Finishing',
    description: 'Clean stitching, consistent sizing and a finish built for repeated everyday wear.',
  },
  {
    title: 'Business-Focused Solutions',
    description: 'We work directly with businesses to match uniforms to your industry and team needs.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us" aria-labelledby="why-choose-us-heading">
      <div className="section-heading">
        <h2 id="why-choose-us-heading">Why AVN Uniforms</h2>
      </div>
      <div className="why-choose-us__grid">
        {REASONS.map((reason) => (
          <article key={reason.title} className="why-choose-us__card">
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
