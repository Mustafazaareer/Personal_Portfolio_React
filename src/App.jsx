import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutpage/AboutPage";
import SkillsPage from "./pages/skillspage/SkillsPage";
import ProjectsPage from "./pages/projectespage/ProjectsPage";
import ContactPage from "./pages/contactpage/ContactPage";
import Nav from "./componants/nav/Nav";
import Footer from "./componants/footer/Footer";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.mainContainer}>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
