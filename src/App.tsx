import { Route, Routes } from "react-router";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { AboutMePage } from "./pages/AboutMePage/AboutMePage";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";
import { ResumePage } from "./pages/ResumePage/ResumePage";

export function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route
            path="/projects"
            element={<ProjectsPage />}
          />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
