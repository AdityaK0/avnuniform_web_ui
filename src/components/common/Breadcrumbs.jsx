import { Link } from 'react-router-dom';

export default function Breadcrumbs({ trail }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={item.label}>
              {isLast || !item.to ? (
                <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
              {!isLast && <span className="breadcrumbs__sep" aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
