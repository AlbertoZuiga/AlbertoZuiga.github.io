import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Cada ruta es un chunk propio; framer-motion y react-router quedan en el principal
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const CalculatorProject = lazy(() => import("./pages/CalculatorProject"));
const ClockProject = lazy(() => import("./pages/ClockProject"));
const TicTacToeProject = lazy(() => import("./pages/TicTacToeProject"));
const CameraProject = lazy(() => import("./pages/CameraProject"));

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

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* key en Suspense: AnimatePresence solo detecta cambios en su hijo directo */}
      <Suspense key={location.pathname} fallback={null}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/calculator" element={<CalculatorProject />} />
          <Route path="/projects/clock" element={<ClockProject />} />
          <Route path="/projects/tic-tac-toe" element={<TicTacToeProject />} />
          <Route path="/projects/camera" element={<CameraProject />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
        <ThemedToaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
