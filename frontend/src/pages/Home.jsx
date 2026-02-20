import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import MissionVision from "../components/home/MissionVision";
import FocusAreas from "../components/home/FocusAreas";
import ImpactStats from "../components/home/ImpactStats";
import TrustedPartners from "../components/home/TrustedPartners";
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <TrustedPartners />
      <MissionVision />
      <FocusAreas />
      <ImpactStats />
    </MainLayout>
  );
};

export default Home;
