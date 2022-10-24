import { AboutSection } from "../../sections/CompanySections/AboutSection/AboutSection";
import CompanyHero from "../../sections/CompanySections/CompanyHero";
import ValuesSection from "../../sections/CompanySections/ValuesSection";
import Community from "../../sections/Community";
import CustomerSection from "../../sections/CompanySections/CustomerSection";

export const CompanyPage = () => {
  return (
    <div>
      <CompanyHero />
      <AboutSection />
      <ValuesSection />
      <CustomerSection />
      <div className=" pt-12 md:pt-24">
        <Community />
      </div>
    </div>
  );
};
