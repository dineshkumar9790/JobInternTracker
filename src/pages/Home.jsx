import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-page">

      {/* =========================================
          ANIMATED BACKGROUND
      ========================================= */}

      <div className="home-background">

        <div className="gradient-orb orb-purple"></div>

        <div className="gradient-orb orb-blue"></div>

        <div className="gradient-orb orb-pink"></div>

        <div className="floating-particle particle-one"></div>

        <div className="floating-particle particle-two"></div>

        <div className="floating-particle particle-three"></div>

        <div className="floating-particle particle-four"></div>

        <div className="floating-particle particle-five"></div>

        <div className="grid-overlay"></div>

      </div>


      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="hero">

        {/* HERO CONTENT */}

        <div className="hero-content">

          <div className="hero-badge">
            <span className="badge-dot"></span>

            YOUR CAREER STARTS HERE
          </div>

          <h1>
            Find.
            <span> Apply.</span>
            <span className="gradient-text">
              Succeed.
            </span>
          </h1>

          <p className="hero-description">
            Your all-in-one platform to discover
            jobs and internships, manage your
            applications and track your career
            journey.
          </p>


          {/* HERO BUTTONS */}

          <div className="hero-buttons">

            <Link
              to="/jobs"
              className="primary-hero-btn"
            >
              <span>Explore Jobs</span>

              <span className="btn-arrow">
                →
              </span>
            </Link>

            <Link
              to="/internships"
              className="secondary-hero-btn"
            >
              🎓 Find Internships
            </Link>

          </div>


          {/* QUICK STATS */}

          <div className="hero-stats">

            <div className="hero-stat">

              <strong>
                100+
              </strong>

              <span>
                Opportunities
              </span>

            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat">

              <strong>
                24/7
              </strong>

              <span>
                Career Tracking
              </span>

            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat">

              <strong>
                1
              </strong>

              <span>
                Smart Dashboard
              </span>

            </div>

          </div>

        </div>


        {/* =========================================
            HERO IMAGE
        ========================================= */}

        <div className="hero-visual">

          <div className="hero-glow"></div>

          <div className="hero-ring ring-one"></div>

          <div className="hero-ring ring-two"></div>

          <img
            src="assets\images.jpg"
            alt="Career inspiration"
            className="hero-image"
          />


          {/* FLOATING CARD 1 */}

          <div className="floating-career-card card-job">

            <div className="floating-icon purple-icon">
              💼
            </div>

            <div>
              <small>
                New Opportunity
              </small>

              <strong>
                Frontend Developer
              </strong>

              <span>
                Remote · Full Time
              </span>
            </div>

          </div>


          {/* FLOATING CARD 2 */}

          <div className="floating-career-card card-applied">

            <div className="success-icon">
              ✓
            </div>

            <div>
              <small>
                Application
              </small>

              <strong>
                Successfully Applied
              </strong>

              <span>
                Just now
              </span>
            </div>

          </div>


          {/* FLOATING CARD 3 */}

          <div className="floating-career-card card-internship">

            <div className="floating-icon blue-icon">
              🎓
            </div>

            <div>
              <small>
                Internship
              </small>

              <strong>
                Software Intern
              </strong>

              <span>
                Chennai · Hybrid
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          FEATURE STRIP
      ========================================= */}

      <section className="feature-strip">

        <div className="feature-strip-item">

          <div className="strip-icon">
            🔎
          </div>

          <div>
            <strong>
              Discover
            </strong>

            <span>
              Find the right opportunities
            </span>
          </div>

        </div>


        <div className="feature-strip-item">

          <div className="strip-icon">
            ⚡
          </div>

          <div>
            <strong>
              Apply
            </strong>

            <span>
              Keep applications organized
            </span>
          </div>

        </div>


        <div className="feature-strip-item">

          <div className="strip-icon">
            📊
          </div>

          <div>
            <strong>
              Track
            </strong>

            <span>
              Monitor your progress
            </span>
          </div>

        </div>


        <div className="feature-strip-item">

          <div className="strip-icon">
            🚀
          </div>

          <div>
            <strong>
              Succeed
            </strong>

            <span>
              Move closer to your dream career
            </span>
          </div>

        </div>

      </section>


      {/* =========================================
          FEATURES SECTION
      ========================================= */}

      <section className="home-section features-home">

        <div className="section-heading">

          <span>
            POWERFUL FEATURES
          </span>

          <h2>
            Everything you need
            <br />
            to manage your career.
          </h2>

          <p>
            Stop managing applications across
            spreadsheets, bookmarks and notes.
            Keep everything organized in one
            beautiful workspace.
          </p>

        </div>


        <div className="home-feature-grid">

          {/* FEATURE 1 */}

          <div className="home-feature-card large-feature">

            <div className="feature-number">
              01
            </div>

            <div className="home-feature-icon purple-feature-icon">
              💼
            </div>

            <h3>
              Job Opportunities
            </h3>

            <p>
              Discover and save job opportunities
              that match your career goals.
            </p>

            <Link to="/jobs">
              Explore Jobs →
            </Link>

          </div>


          {/* FEATURE 2 */}

          <div className="home-feature-card">

            <div className="feature-number">
              02
            </div>

            <div className="home-feature-icon blue-feature-icon">
              🎓
            </div>

            <h3>
              Internship Tracker
            </h3>

            <p>
              Find internships and keep track of
              every application in one place.
            </p>

            <Link to="/internships">
              Find Internships →
            </Link>

          </div>


          {/* FEATURE 3 */}

          <div className="home-feature-card">

            <div className="feature-number">
              03
            </div>

            <div className="home-feature-icon pink-feature-icon">
              📊
            </div>

            <h3>
              Smart Dashboard
            </h3>

            <p>
              See your applications, interviews,
              shortlisted opportunities and results.
            </p>

            <Link to="/dashboard">
              Open Dashboard →
            </Link>

          </div>


          {/* FEATURE 4 */}

          <div className="home-feature-card">

            <div className="feature-number">
              04
            </div>

            <div className="home-feature-icon cyan-feature-icon">
              📈
            </div>

            <h3>
              Application Tracking
            </h3>

            <p>
              Update your application status from
              Applied to Interview, Selected or
              Rejected.
            </p>

            <Link to="/dashboard">
              Track Applications →
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          HOW IT WORKS
      ========================================= */}

      <section className="home-section how-section">

        <div className="section-heading centered">

          <span>
            SIMPLE PROCESS
          </span>

          <h2>
            Your career journey,
            <br />
            simplified.
          </h2>

          <p>
            Four simple steps to take control
            of your job search.
          </p>

        </div>


        <div className="steps-container">

          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              🔎
            </div>

            <h3>
              Discover
            </h3>

            <p>
              Browse jobs and internships that
              match your interests.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              📝
            </div>

            <h3>
              Apply
            </h3>

            <p>
              Apply to opportunities and save them
              to your application tracker.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              📊
            </div>

            <h3>
              Track
            </h3>

            <p>
              Update your status as your
              application progresses.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step-card">

            <div className="step-number">
              04
            </div>

            <div className="step-icon">
              🚀
            </div>

            <h3>
              Succeed
            </h3>

            <p>
              Reach your goal and land your
              next opportunity.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          DASHBOARD CTA
      ========================================= */}

      <section className="dashboard-cta">

        <div className="cta-glow"></div>

        <div className="cta-content">

          <span>
            YOUR CAREER. YOUR PROGRESS.
          </span>

          <h2>
            Ready to take control
            of your career?
          </h2>

          <p>
            Start tracking your applications
            today and turn your job search into
            a clear career journey.
          </p>

          <div className="cta-buttons">

            <Link
              to="/jobs"
              className="cta-primary"
            >
              Start Exploring →
            </Link>

            <Link
              to="/dashboard"
              className="cta-secondary"
            >
              View Dashboard
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          FOOTER MESSAGE
      ========================================= */}

      <section className="home-footer-message">

        <div className="footer-logo">
          Career<span>Track</span>
        </div>

        <p>
          Find opportunities. Track progress.
          Build your future.
        </p>

      </section>

    </main>
  );
};

export default Home;