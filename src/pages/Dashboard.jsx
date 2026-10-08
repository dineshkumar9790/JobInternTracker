import { useEffect, useState } from "react";

import {
  getApplications,
  deleteApplication,
  updateApplication,
} from "../services/applicationService";

import ApplicationCard from "../components/ApplicationCard";

const Dashboard = () => {
  const [applications, setApplications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [filter, setFilter] =
    useState("All");

  // =========================
  // LOAD APPLICATIONS
  // =========================

  const loadApplications = async () => {
    try {
      setLoading(true);

      const data = await getApplications();

      // Dashboard only shows
      // applications that were applied to
      const applied = data.filter(
        (application) =>
          application.isApplied === true
      );

      setApplications(applied);
    } catch (error) {
      console.error(
        "Failed to load applications:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  // =========================
  // DELETE APPLICATION
  // =========================

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this application?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteApplication(id);

      setApplications((previous) =>
        previous.filter(
          (application) =>
            application._id !== id
        )
      );
    } catch (error) {
      console.error(
        "Failed to delete:",
        error
      );

      alert(
        "Failed to delete application."
      );
    }
  };

  // =========================
  // UPDATE STATUS
  // =========================

  const handleStatusChange = async (
    id,
    newStatus
  ) => {
    try {
      const updated =
        await updateApplication(id, {
          status: newStatus,
        });

      setApplications((previous) =>
        previous.map((application) =>
          application._id === id
            ? updated
            : application
        )
      );
    } catch (error) {
      console.error(
        "Failed to update status:",
        error
      );

      alert(
        "Failed to update application status."
      );
    }
  };

  // =========================
  // STATISTICS
  // =========================

  const totalApplications =
    applications.length;

  const totalJobs =
    applications.filter(
      (application) =>
        application.type === "Job"
    ).length;

  const totalInternships =
    applications.filter(
      (application) =>
        application.type === "Internship"
    ).length;

  const totalInterviews =
    applications.filter(
      (application) =>
        application.status === "Interview"
    ).length;

  const totalShortlisted =
    applications.filter(
      (application) =>
        application.status === "Shortlisted"
    ).length;

  const totalSelected =
    applications.filter(
      (application) =>
        application.status === "Selected"
    ).length;

  const totalRejected =
    applications.filter(
      (application) =>
        application.status === "Rejected"
    ).length;

  // =========================
  // FILTER
  // =========================

  const filteredApplications =
    applications.filter((application) => {
      if (filter === "All") {
        return true;
      }

      if (
        filter === "Jobs" &&
        application.type === "Job"
      ) {
        return true;
      }

      if (
        filter === "Internships" &&
        application.type === "Internship"
      ) {
        return true;
      }

      return application.status === filter;
    });

  return (
    <section className="dashboard">

      {/* =========================
          HEADER
      ========================= */}

      <div className="dashboard-heading">

        <div>
          <span>MY CAREER</span>

          <h1>
            Application Dashboard
          </h1>

          <p>
            Track every job and internship
            you have applied for.
          </p>
        </div>

      </div>

      {/* =========================
          STATISTICS
      ========================= */}

      <div className="stats-grid">

        <div className="stat-card purple">
          <span>
            Total Applications
          </span>

          <strong>
            {totalApplications}
          </strong>
        </div>

        <div className="stat-card blue">
          <span>
            Jobs
          </span>

          <strong>
            {totalJobs}
          </strong>
        </div>

        <div className="stat-card pink">
          <span>
            Internships
          </span>

          <strong>
            {totalInternships}
          </strong>
        </div>

        <div className="stat-card green">
          <span>
            Interviews
          </span>

          <strong>
            {totalInterviews}
          </strong>
        </div>

        <div className="stat-card orange">
          <span>
            Selected
          </span>

          <strong>
            {totalSelected}
          </strong>
        </div>

      </div>

      {/* =========================
          SECONDARY STATISTICS
      ========================= */}

      <div className="secondary-stats">

        <div>
          <span>
            Shortlisted
          </span>

          <strong>
            {totalShortlisted}
          </strong>
        </div>

        <div>
          <span>
            Rejected
          </span>

          <strong>
            {totalRejected}
          </strong>
        </div>

        <div>
          <span>
            Success Rate
          </span>

          <strong>
            {totalApplications === 0
              ? 0
              : Math.round(
                  (totalSelected /
                    totalApplications) *
                    100
                )}
            %
          </strong>
        </div>

      </div>

      {/* =========================
          APPLICATIONS SECTION
      ========================= */}

      <div className="applications-section">

        <div className="applications-header">

          <div>
            <h2>
              My Applications
            </h2>

            <p>
              Applications you have submitted
            </p>
          </div>

          <span>
            {filteredApplications.length}{" "}
            applications
          </span>

        </div>

        {/* =========================
            FILTERS
        ========================= */}

        <div className="dashboard-filters">

          <button
            className={
              filter === "All"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("All")
            }
          >
            All
          </button>

          <button
            className={
              filter === "Jobs"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("Jobs")
            }
          >
            Jobs
          </button>

          <button
            className={
              filter === "Internships"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("Internships")
            }
          >
            Internships
          </button>

          <button
            className={
              filter === "Applied"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("Applied")
            }
          >
            Applied
          </button>

          <button
            className={
              filter === "Interview"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("Interview")
            }
          >
            Interview
          </button>

          <button
            className={
              filter === "Shortlisted"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("Shortlisted")
            }
          >
            Shortlisted
          </button>

          <button
            className={
              filter === "Selected"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("Selected")
            }
          >
            Selected
          </button>

          <button
            className={
              filter === "Rejected"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("Rejected")
            }
          >
            Rejected
          </button>

        </div>

        {/* =========================
            LOADING
        ========================= */}

        {loading && (
          <div className="dashboard-empty">
            <div className="loading-spinner">
              ⏳
            </div>

            <h3>
              Loading applications...
            </h3>
          </div>
        )}

        {/* =========================
            NO APPLICATIONS
        ========================= */}

        {!loading &&
          applications.length === 0 && (
            <div className="dashboard-empty">

              <div className="empty-icon">
                📭
              </div>

              <h3>
                No applications yet
              </h3>

              <p>
                Go to the Jobs or Internships
                page and click
                <strong> Apply Now </strong>
                to add an application here.
              </p>

            </div>
          )}

        {/* =========================
            FILTER HAS NO RESULTS
        ========================= */}

        {!loading &&
          applications.length > 0 &&
          filteredApplications.length ===
            0 && (
            <div className="dashboard-empty">

              <div className="empty-icon">
                🔍
              </div>

              <h3>
                No matching applications
              </h3>

              <p>
                Try selecting another filter.
              </p>

            </div>
          )}

        {/* =========================
            APPLICATION LIST
        ========================= */}

        {!loading &&
          filteredApplications.length >
            0 && (

            <div className="dashboard-application-list">

              {filteredApplications.map(
                (application) => (
                  <div
                    className="dashboard-application-wrapper"
                    key={application._id}
                  >

                    <ApplicationCard
                      application={
                        application
                      }
                      onDelete={
                        handleDelete
                      }
                    />

                    {/* STATUS UPDATE */}

                    <div className="status-update">

                      <label>
                        Update Status
                      </label>

                      <select
                        value={
                          application.status
                        }
                        onChange={(event) =>
                          handleStatusChange(
                            application._id,
                            event.target.value
                          )
                        }
                      >
                        <option value="Applied">
                          Applied
                        </option>

                        <option value="Interview">
                          Interview
                        </option>

                        <option value="Shortlisted">
                          Shortlisted
                        </option>

                        <option value="Selected">
                          Selected
                        </option>

                        <option value="Rejected">
                          Rejected
                        </option>
                      </select>

                    </div>

                  </div>
                )
              )}

            </div>
          )}

      </div>

    </section>
  );
};

export default Dashboard;