const features = [
  {
    icon: "📊",
    title: "Application Dashboard",
    description:
      "See all your applications and their current status.",
  },
  {
    icon: "🔎",
    title: "Search & Filter",
    description:
      "Quickly find jobs and internships by company or status.",
  },
  {
    icon: "📅",
    title: "Application Dates",
    description:
      "Keep track of when you applied to every opportunity.",
  },
  {
    icon: "🎯",
    title: "Status Tracking",
    description:
      "Track applications from Applied to Interview and Selected.",
  },
  {
    icon: "📝",
    title: "Personal Notes",
    description:
      "Save interview details, recruiter notes and reminders.",
  },
  {
    icon: "☁️",
    title: "Cloud Database",
    description:
      "Your application information is stored in MongoDB.",
  },
];

const Features = () => {
  return (
    <section className="page-section">
      <div className="section-heading">
        <span>FEATURES</span>
        <h1>Everything You Need</h1>

        <p>
          A complete workspace for managing your career
          applications.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>

            <h2>{feature.title}</h2>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;