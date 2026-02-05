import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

import GalleryPage from "./pages/GalleryPage";
import Swimming from "./pages/SwimmingPage";
import GymPage from "./pages/GymPage";
import NoticeBoard from "./pages/NoticeBoard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gym" element={<GymPage />} />
        <Route path="/swimming" element={<Swimming />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/noticeboard" element={<NoticeBoard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
