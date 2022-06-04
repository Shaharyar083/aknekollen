import * as react from "react";

// components
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Aknekollen/HeroSection/HeroSection";
import Modal from "./components/Modal/Modal";
import OpeningHours from "./components/OpeningHours/OpeningHours";
import "bootstrap/dist/css/bootstrap.min.css";

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
        </>
      )}
    </>
  );
}

export default App;
