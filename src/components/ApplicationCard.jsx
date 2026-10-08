const ApplicationCard = ({ application, onDelete }) => {
  const statusClass = application.status
    .toLowerCase()
    .replace(" ", "-");

  return (
    <div className="application-card">
      <div className="company-logo">
        {application.company.charAt(0)}
      </div>

      <div className="application-info">
        <div className="application-top">
          <div>
            <h3>{application.position}</h3>
            <p>{application.company}</p>
          </div>

          <span className={`status ${statusClass}`}>
            {application.status}
          </span>
        </div>

        <div className="application-details">
          <span>📍 {application.location}</span>
          <span>💼 {application.type}</span>
          <span>
            📅{" "}
            {new Date(
              application.applicationDate
            ).toLocaleDateString()}
          </span>
        </div>

        {application.notes && (
          <p className="notes">
            {application.notes}
          </p>
        )}

        <div className="application-actions">
          {application.jobUrl && (
            <a
              href={application.jobUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Job ↗
            </a>
          )}

          <button
            className="delete-btn"
            onClick={() => onDelete(application._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;