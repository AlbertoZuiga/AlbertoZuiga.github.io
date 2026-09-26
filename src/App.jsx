import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./hooks/useTheme";
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

const ThemedToaster = () => {
  const { isDark } = useTheme();
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: isDark
          ? { background: "#f3f4f6", color: "#111827" }
          : { background: "#363636", color: "#fff" },
        success: {
          duration: 5000,
          iconTheme: { primary: "#10b981", secondary: "#fff" },
        },
        error: {
          duration: 6000,
          iconTheme: { primary: "#ef4444", secondary: "#fff" },
        },
      }}
    />
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
          <ThemedToaster />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
