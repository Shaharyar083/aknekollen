// components
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Aknekollen/HeroSection/HeroSection";
import OpeningHours from "./components/OpeningHours/OpeningHours";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutSection from "./components/AboutSection/AboutSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OpeningHours />
      <AboutSection />
    </>
  );
}

export default App;
