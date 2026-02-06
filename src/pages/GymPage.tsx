import GymHeader from "../components/gym/GymHeader";
import Activities from "../components/gym/ActivitiesAndPools";
import GymTraining from "../components/gym/GymTraining";
import RequiredDocs from "../components/gym/RequiredDocs";
import GymGallery from "../components/gym/GymGallery";
import GymCatagories from "../components/gym/GymCategories";

const GymPage = () => {
  return (
    <>
      <GymHeader />
      <Activities />
      <GymCatagories/>
      <GymTraining />
      <RequiredDocs />
      <GymGallery />
    </>
  );
};

export default GymPage;
