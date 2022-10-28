import AmbassadorHero from "../../sections/AmbassadorSections/AmbassdorHero";
import Benefits from "../../sections/AmbassadorSections/Benefits";
import { Responsibilities } from "../../sections/AmbassadorSections/Responsibilities/Responsibilities";
import { StepsSection } from "../../sections/AmbassadorSections/StepsSection/StepsSection";
import Community from "../../sections/Community"

export const AmbassadorPage = () => {
  return (
    <div>
      <AmbassadorHero />
      <Responsibilities />
      <StepsSection />
      <Benefits />
      <Community/>
    </div>
  );
};
