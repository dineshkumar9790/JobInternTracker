import { useEffect, useState } from "react";

import AddOpportunity from "../components/AddOpportunity";

import {
  getApplications,
  applyForApplication,
  deleteApplication,
} from "../services/applicationService";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  const [showModal, setShowModal] =
    useState(false);

  const loadJobs = async () => {
    try {
      const data = await getApplications();

      setJobs(
        data.filter(
          (item) => item.type === "Job"
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleCreated = (job) => {
    setJobs((previous) => [
      job,
      ...previous,
    ]);
  };

  const handleApply = async (id) => {
    try {
      const updated =
        await applyForApplication(id);

      setJobs((previous) =>
        previous.map((job) =>
          job._id === id
            ? updated
            : job
        )
      );

      alert(
        "Application saved to your dashboard!"
      );
    } catch (error) {
      console.error(error);
      alert("Failed to apply");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Remove this job?"
    );

    if (!confirmDelete) return;

    try {
      await deleteApplication(id);

      setJobs((previous) =>
        previous.filter(
          (job) => job._id !== id
        )
      );
    } catch (error) {
      console.error(error);
      alert("Failed to remove job");
    }
  };

  return (
    <section className="page-section">

      <div className="opportunities-header">

        <div className="section-heading">
          <span>JOB OPPORTUNITIES</span>

          <h1>
            Find Your Next Job
          </h1>

          <p>
            Add, apply and manage job
            opportunities.
          </p>
        </div>

        <button
          className="new-opportunity-btn"
          onClick={() =>
            setShowModal(true)
          }
        >
          + New Job
        </button>

      </div>

      {jobs.length === 0 ? (
        <div className="empty-opportunities">
          <div>💼</div>

          <h2>
            No jobs available
          </h2>

          <p>
            Add your first job opportunity.
          </p>

          <button
            className="new-opportunity-btn"
            onClick={() =>
              setShowModal(true)
            }
          >
            + Add New Job
          </button>
        </div>
      ) : (
        <div className="opportunity-grid">

          {jobs.map((job) => (
            <div
              className="opportunity-card"
              key={job._id}
            >

              <div className="opportunity-icon">
                💼
              </div>

              <h2>
                {job.position}
              </h2>

              <p>
                {job.company}
              </p>

              <div className="tags">

                <span>
                  {job.location}
                </span>

                <span>
                  {job.status}
                </span>

              </div>

              {job.notes && (
                <p className="opportunity-notes">
                  {job.notes}
                </p>
              )}

              <div className="opportunity-actions">

                {job.jobUrl && (
                  <a
                    href={job.jobUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Job ↗
                  </a>
                )}

                {!job.isApplied ? (
                  <button
                    onClick={() =>
                      handleApply(job._id)
                    }
                  >
                    Apply Now
                  </button>
                ) : (
                  <button
                    className="applied-btn"
                    disabled
                  >
                    ✓ Applied
                  </button>
                )}

                <button
                  className="remove-btn"
                  onClick={() =>
                    handleDelete(job._id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

      {showModal && (
        <AddOpportunity
          type="Job"
          onCreated={handleCreated}
          onClose={() =>
            setShowModal(false)
          }
        />
      )}

    </section>
  );
};

export default Jobs;