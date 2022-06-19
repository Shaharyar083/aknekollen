import react from 'react'
import Navbar from "../Navbar/Navbar";
import HeroSection from "../Aknekollen/HeroSection/HeroSection";
import Modal from "../Modal/Modal";
import OpeningHours from "../OpeningHours/OpeningHours";
import AboutSection from "../AboutSection/AboutSection";
import Footer from "../Footer/index";
import FactsSection from "../FactsSection/FactsSection";
const Home = () => {
    const [modal, setModal] = react.useState(false);
    return (
        <>
            {
                modal ? (
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
                )
            }
        </>
    )
}

export default Home