import { useEffect, useState } from "react";

import AddOpportunity from "../components/AddOpportunity";

import {
  getApplications,
  applyForApplication,
  deleteApplication,
} from "../services/applicationService";

const Internships = () => {
  const [internships, setInternships] =
    useState([]);

  const [showModal, setShowModal] =
    useState(false);

  const loadInternships = async () => {
    try {
      const data = await getApplications();

      setInternships(
        data.filter(
          (item) =>
            item.type === "Internship"
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadInternships();
  }, []);

  const handleCreated = (internship) => {
    setInternships((previous) => [
      internship,
      ...previous,
    ]);
  };

  const handleApply = async (id) => {
    try {
      const updated =
        await applyForApplication(id);

      setInternships((previous) =>
        previous.map((internship) =>
          internship._id === id
            ? updated
            : internship
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
      "Remove this internship?"
    );

    if (!confirmDelete) return;

    try {
      await deleteApplication(id);

      setInternships((previous) =>
        previous.filter(
          (internship) =>
            internship._id !== id
        )
      );
    } catch (error) {
      console.error(error);
      alert(
        "Failed to remove internship"
      );
    }
  };

  return (
    <section className="page-section">

      <div className="opportunities-header">

        <div className="section-heading">
          <span>INTERNSHIP OPPORTUNITIES</span>

          <h1>
            Start Your Career
          </h1>

          <p>
            Add, apply and manage
            internship opportunities.
          </p>
        </div>

        <button
          className="new-opportunity-btn"
          onClick={() =>
            setShowModal(true)
          }
        >
          + New Internship
        </button>

      </div>

      {internships.length === 0 ? (
        <div className="empty-opportunities">
          <div>🎓</div>

          <h2>
            No internships available
          </h2>

          <p>
            Add your first internship
            opportunity.
          </p>

          <button
            className="new-opportunity-btn"
            onClick={() =>
              setShowModal(true)
            }
          >
            + Add Internship
          </button>
        </div>
      ) : (
        <div className="opportunity-grid">

          {internships.map(
            (internship) => (
              <div
                className="opportunity-card internship"
                key={internship._id}
              >

                <div className="opportunity-icon">
                  🎓
                </div>

                <h2>
                  {internship.position}
                </h2>

                <p>
                  {internship.company}
                </p>

                <div className="tags">

                  <span>
                    {internship.location}
                  </span>

                  <span>
                    {internship.status}
                  </span>

                </div>

                {internship.notes && (
                  <p className="opportunity-notes">
                    {internship.notes}
                  </p>
                )}

                <div className="opportunity-actions">

                  {internship.jobUrl && (
                    <a
                      href={internship.jobUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Internship ↗
                    </a>
                  )}

                  {!internship.isApplied ? (
                    <button
                      onClick={() =>
                        handleApply(
                          internship._id
                        )
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
                      handleDelete(
                        internship._id
                      )
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>
            )
          )}

        </div>
      )}

      {showModal && (
        <AddOpportunity
          type="Internship"
          onCreated={handleCreated}
          onClose={() =>
            setShowModal(false)
          }
        />
      )}

    </section>
  );
};

export default Internships;