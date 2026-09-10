import { Link } from 'react-router-dom';

const SOLUTIONS = [
  'Corporate offices',
  'Hotels',
  'Restaurants',
  'Factories',
  'Schools',
  'Events',
  'Promotional campaigns',
  'Staff teams',
];

export default function BusinessSolutions() {
  return (
    <section className="business-solutions" aria-labelledby="business-solutions-heading">
      <div className="business-solutions__inner">
        <div className="section-heading section-heading--light">
          <h2 id="business-solutions-heading">Uniform Solutions for Every Business</h2>
          <p>
            AVN Uniforms supplies uniforms and promotional apparel for teams across a wide range of
            industries.
          </p>
        </div>
        <ul className="business-solutions__list">
          {SOLUTIONS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn--light btn--large">
          Talk to AVN Uniforms
        </Link>
      </div>
    </section>
  );
}
