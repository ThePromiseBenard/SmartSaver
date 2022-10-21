import { FeaturesSection } from "../../sections/FeaturesSection/FeaturesSection";
import HomeHero from "../../sections/HomeHero";

export const Home = () => {
  return (
    <div className="space-y-8 md:space-y-32">
      <HomeHero />
      <FeaturesSection />
    </div>
  );
};
