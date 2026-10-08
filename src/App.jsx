import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Jobs from "./pages/Jobs";
import Internships from "./pages/Internships";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedBackground />

      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route
              path="/features"
              element={<Features />}
            />

            <Route path="/jobs" element={<Jobs />} />

            <Route
              path="/internships"
              element={<Internships />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;