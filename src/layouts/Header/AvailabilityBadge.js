import { availabilityConfig } from './NavBarData';
import './AvailabilityBadge.css';

function AvailabilityBadge() {
  if (!availabilityConfig.isAvailable) return null;

  return (
    <div
      className="availability-badge"
      title={availabilityConfig.tooltip}
      role="status"
      aria-label={`Status: ${availabilityConfig.label}`}
    >
      <span
        className={`availability-dot availability-dot--${availabilityConfig.dotColor}`}
        aria-hidden="true"
      />
      <span className="availability-label">
        {availabilityConfig.label}
      </span>
    </div>
  );
}

export default AvailabilityBadge;
