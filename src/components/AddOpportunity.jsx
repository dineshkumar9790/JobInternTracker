import { useState } from "react";
import { createApplication } from "../services/applicationService";

const AddOpportunity = ({ type, onCreated, onClose }) => {
  const [form, setForm] = useState({
    company: "",
    position: "",
    location: "",
    jobUrl: "",
    notes: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newOpportunity = await createApplication({
        ...form,
        type,
      });

      onCreated(newOpportunity);

      setForm({
        company: "",
        position: "",
        location: "",
        jobUrl: "",
        notes: "",
      });

      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to add opportunity");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="opportunity-modal">
        <button
          className="modal-close"
          onClick={onClose}
        >
          ×
        </button>

        <h2>
          Add New {type}
        </h2>

        <p>
          Add a new {type.toLowerCase()} opportunity.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Company</label>

          <input
            name="company"
            placeholder="Company name"
            value={form.company}
            onChange={handleChange}
            required
          />

          <label>Position</label>

          <input
            name="position"
            placeholder="Position / role"
            value={form.position}
            onChange={handleChange}
            required
          />

          <label>Location</label>

          <input
            name="location"
            placeholder="Remote / Chennai / Bangalore..."
            value={form.location}
            onChange={handleChange}
          />

          <label>Job URL</label>

          <input
            name="jobUrl"
            placeholder="https://..."
            value={form.jobUrl}
            onChange={handleChange}
          />

          <label>Notes</label>

          <textarea
            name="notes"
            placeholder="Additional information..."
            value={form.notes}
            onChange={handleChange}
            rows="4"
          />

          <button
            type="submit"
            className="save-opportunity-btn"
          >
            + Add {type}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddOpportunity;