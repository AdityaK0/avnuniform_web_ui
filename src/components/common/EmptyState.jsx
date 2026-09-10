import { Link } from 'react-router-dom';

export default function EmptyState({ title, message, actionLabel, actionTo }) {
  return (
    <div className="empty-state">
      <h2>{title}</h2>
      <p>{message}</p>
      {actionLabel && actionTo && (
        <Link to={actionTo} className="btn btn--primary">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
