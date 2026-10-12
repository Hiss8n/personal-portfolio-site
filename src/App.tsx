import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HomePage, ProjectsPage, CvPage, ContactPage, AboutPage } from "@/pages/PortfolioPages";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground font-sans antialiased">
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
          <Toaster position="top-right" richColors />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
