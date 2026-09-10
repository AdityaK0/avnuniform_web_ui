import { business } from '../../data/business.js';

export default function AnnouncementBar() {
  if (!business.announcement) return null;
  return (
    <div className="announcement-bar">
      <p>{business.announcement}</p>
    </div>
  );
}
