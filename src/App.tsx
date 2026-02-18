import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Algorithmic from "./sections/Algorithmic";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Leadership from "./sections/Leadership";
import EnjoyBuilding from "./sections/EnjoyBuilding";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/projects/");

  if (isProjectPage) {
    return (
      <>
        <Outlet />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Algorithmic />
      <Projects />
      <Skills />
      <Leadership />
      <EnjoyBuilding />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
