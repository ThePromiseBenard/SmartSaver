import { AboutSection } from "../../sections/CompanySections/AboutSection/AboutSection";
import CompanyHero from "../../sections/CompanySections/CompanyHero";
import ValuesSection from "../../sections/CompanySections/ValuesSection";

export const CompanyPage = () => {
  return (
    <div>
      <CompanyHero />
      <AboutSection />
      <ValuesSection />
    </div>
  );
};
