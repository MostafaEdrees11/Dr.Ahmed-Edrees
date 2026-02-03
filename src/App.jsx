// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutDoctor from "./components/AboutDoctor";
import OurServices from "./components/OurServices";
import OurCases from "./components/OurCases";
import Feedback from "./components/Feedback";
import ContactUs from "./components/ContactUs";
import AllCasesPage from "./pages/AllCasesPage"; // ← سننشئ هذا الملف

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* الصفحة الرئيسية */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutDoctor />
              <OurServices />
              <OurCases /> {/* ← هنا يظهر 2 حالات فقط */}
              <Feedback />
              <ContactUs />
            </>
          }
        />

        {/* صفحة جميع الحالات */}
        <Route path="/cases" element={<AllCasesPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
