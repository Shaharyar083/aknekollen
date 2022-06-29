import react from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../Aknekollen/HeroSection/HeroSection";
import Modal from "../Modal/Modal";
import OpeningHours from "../OpeningHours/OpeningHours";
import AboutSection from "../AboutSection/AboutSection";
import Footer from "../Footer/index";
import FactsSection from "../FactsSection/FactsSection";

import ReactGA from "react-ga";

const TRACKING_ID = "UA-220438183-5";
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
          <Navbar />
          <HeroSection openModal={() => setModal(true)} />
          <OpeningHours />
          <AboutSection />
          <FactsSection />
          {/* <Fakta /> */}
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
