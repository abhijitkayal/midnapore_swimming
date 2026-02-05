import AboutUs from "../components/home/AboutUs";
import FacilityCard from "../components/home/FacilityCard";
import Facilities from "../components/home/Facilities";
import Gallery from "../components/home/Gallery";
import Header from "../components/home/Header";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <FacilityCard />
      <Facilities />
      <Gallery />
      <Testimonials />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
