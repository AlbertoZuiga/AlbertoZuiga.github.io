import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CalculatorProject from "./pages/CalculatorProject";
import ClockProject from "./pages/ClockProject";
import TicTacToeProject from "./pages/TicTacToeProject";
import CameraProject from "./pages/CameraProject";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/projects/calculator"
                element={<CalculatorProject />}
              />
              <Route path="/projects/clock" element={<ClockProject />} />
              <Route
                path="/projects/tic-tac-toe"
                element={<TicTacToeProject />}
              />
              <Route path="/projects/camera" element={<CameraProject />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
