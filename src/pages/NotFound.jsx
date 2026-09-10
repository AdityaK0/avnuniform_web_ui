import Seo from '../components/common/Seo.jsx';
import EmptyState from '../components/common/EmptyState.jsx';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | AVN Uniforms"
        description="The page you're looking for could not be found."
        path="/404"
        noindex
      />
      <div className="page-header not-found">
        <EmptyState
          title="404 — Page Not Found"
          message="The page you're looking for doesn't exist or may have moved."
          actionLabel="Back to Home"
          actionTo="/"
        />
      </div>
    </>
  );
}
