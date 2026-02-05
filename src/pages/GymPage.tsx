import GymHeader from "../components/gym/GymHeader";
import Activities from "../components/gym/ActivitiesAndPools";
import GymTraining from "../components/gym/GymTraining";
import RequiredDocs from "../components/gym/RequiredDocs";
import GymGallery from "../components/gym/GymGallery";

const GymPage = () => {
  return (
    <>
      <GymHeader />
      <Activities />
      <GymTraining />
      <RequiredDocs />
      <GymGallery />
    </>
  );
};

export default GymPage;
