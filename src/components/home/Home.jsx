import react, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../Aknekollen/HeroSection/HeroSection";
import Modal from "../Modal/Modal";
import OpeningHours from "../OpeningHours/OpeningHours";
import AboutSection from "../AboutSection/AboutSection";
import Footer from "../Footer/index";
import FactsSection from "../FactsSection/FactsSection";
import FooterMain from "../FooterMain/Footer"

import ReactGA from "react-ga";

const TRACKING_ID = "G-HNJTTQLVQ6";
ReactGA.initialize(TRACKING_ID);

const Home = () => {
  const [modal, setModal] = react.useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      {modal ? (
        <Modal close={() => setModal(false)} />
      ) : (
        <>
          <Navbar flag={true} />
          <HeroSection openModal={() => setModal(true)} />
          <OpeningHours />
          <AboutSection />
          <FactsSection />
          {/* <Fakta /> */}
          {/* <Footer /> */}
          <FooterMain />
        </>
      )}
    </>
  );
};

export default Home;
