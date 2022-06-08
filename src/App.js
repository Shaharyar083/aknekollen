import * as react from "react";

// components
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Aknekollen/HeroSection/HeroSection";
import Modal from "./components/Modal/Modal";
import OpeningHours from "./components/OpeningHours/OpeningHours";
import AboutSection from "./components/AboutSection/AboutSection";
import Fakta from "../src/components/fakta";
import Footer from "../src/components/Footer/index";
import "bootstrap/dist/css/bootstrap.min.css";
import FactsSection from "./components/FactsSection/FactsSection";

function App() {
  const [modal, setModal] = react.useState(false);
  return (
    <>
      {modal ? (
        <Modal close={() => setModal(false)} />
      ) : (
        <>
          <Navbar />
          <HeroSection openModal={() => setModal(true)} />
          <OpeningHours />
          <AboutSection />
          <FactsSection />
          <Fakta />
          {/* <Footer /> */}
        </>
      )}
    </>
  );
}

export default App;
