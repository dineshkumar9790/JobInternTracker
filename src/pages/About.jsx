const About = () => {
  return (
    <section className="page-section">
      <div className="section-heading">
        <span>ABOUT US</span>
        <h1>Never Lose Track of an Opportunity</h1>

        <p>
          JobTrack helps students, graduates and professionals
          organize their job and internship applications from
          one centralized dashboard.
        </p>
      </div>

      <div className="about-grid">
        <div className="glass-card">
          <div className="icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            Make career application management simple,
            organized and stress-free.
          </p>
        </div>

        <div className="glass-card">
          <div className="icon">🚀</div>
          <h2>Our Vision</h2>
          <p>
            Help every job seeker discover and manage their
            next career opportunity.
          </p>
        </div>

        <div className="glass-card">
          <div className="icon">💜</div>
          <h2>Built for You</h2>
          <p>
            Designed with students and modern job seekers in
            mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;