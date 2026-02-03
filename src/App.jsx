import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutDoctor from "./components/AboutDoctor";
import OurServices from "./components/OurServices";
import OurCases from "./components/OurCases";
import Feedback from "./components/Feedback";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutDoctor />
      <OurServices />
      <OurCases />
      <Feedback />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
