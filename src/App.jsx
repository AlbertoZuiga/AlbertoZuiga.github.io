import { Suspense, use, useEffect } from "react";
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
import LocaleLayout from "./components/LocaleLayout";
import { LANGS, localePath } from "./i18n/locale";

// Cada ruta es un chunk propio; framer-motion y react-router quedan en el principal.
// No se usa React.lazy: aunque el chunk esté precargado, lazy suspende igual en
// el primer render de cada componente. Con use() y un thenable ya resuelto
// (status: "fulfilled") el render es síncrono y no aparece el fallback.
const page = (loader) => {
  let promise;
  const preload = () =>
    (promise ??= loader().then((mod) => {
      promise.status = "fulfilled";
      promise.value = mod;
      return mod;
    }));
  const Page = (props) => {
    const { default: Component } = use(preload());
    return <Component {...props} />;
  };
  Page.preload = preload;
  return Page;
};

const Home = page(() => import("./pages/Home"));
const About = page(() => import("./pages/About"));
const Projects = page(() => import("./pages/Projects"));
const Contact = page(() => import("./pages/Contact"));
const CalculatorProject = page(() => import("./pages/CalculatorProject"));
const ClockProject = page(() => import("./pages/ClockProject"));
const TicTacToeProject = page(() => import("./pages/TicTacToeProject"));
const CameraProject = page(() => import("./pages/CameraProject"));
const ProjectDetail = page(() => import("./pages/ProjectDetail"));
// Rutas hijas relativas; se montan bajo "/" (es) y "/en" (en). La comodín
// projects/:slug va después de las fijas.
const routes = [
  ["", Home],
  ["about", About],
  ["projects", Projects],
  ["contact", Contact],
  ["projects/calculator", CalculatorProject],
  ["projects/clock", ClockProject],
  ["projects/tic-tac-toe", TicTacToeProject],
  ["projects/camera", CameraProject],
  ["projects/:slug", ProjectDetail],
];

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
  // Precarga el resto de páginas tras el primer render: AnimatePresence monta la
  // ruta nueva fuera de la transición del router, y si el chunk no está cargado
  // Suspense muestra el fallback (pantalla en blanco) entre salida y entrada.
  useEffect(() => {
    routes.forEach(([, p]) => p.preload());
  }, []);
  return (
    <Suspense fallback={null}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {LANGS.map((lang) => (
            <Route
              key={lang}
              path={localePath(lang, "/")}
              element={<LocaleLayout lang={lang} />}
            >
              {routes.map(([path, Page]) => (
                <Route
                  key={path}
                  index={path === ""}
                  path={path || undefined}
                  element={<Page />}
                />
              ))}
            </Route>
          ))}
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="grow">
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
