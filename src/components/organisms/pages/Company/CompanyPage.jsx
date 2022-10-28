import { AboutSection } from "../../sections/CompanySections/AboutSection/AboutSection";
import CompanyHero from "../../sections/CompanySections/CompanyHero";
import ValuesSection from "../../sections/CompanySections/ValuesSection";
import Community from "../../sections/Community";
import CustomerSection from "../../sections/CompanySections/CustomerSection";
import Team from "../../sections/CompanySections/Team";

export const CompanyPage = ({ members }) => {
  return (
    <div>
      <CompanyHero />
      <AboutSection />
      <ValuesSection />
      <Team members={members} />
      <CustomerSection />
      <div className=" pt-12 md:pt-24">
        <Community />
      </div>
    </div>
  );
};
