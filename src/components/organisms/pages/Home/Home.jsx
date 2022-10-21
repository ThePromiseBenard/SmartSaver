import ControlLife from "../../sections/ControlLife";
import { FeaturesSection } from "../../sections/FeaturesSection/FeaturesSection";
import HomeHero from "../../sections/HomeHero";
import { InstantLoan } from "../../sections/InstantLoan/InstantLoan";
import SeamlessPayments from "../../sections/SeamleesPayments";

export const Home = () => {
  return (
    <div className="space-y-16 md:space-y-40">
      <HomeHero />
      <FeaturesSection />
      <InstantLoan />
      <SeamlessPayments />
      <ControlLife />
    </div>
  );
};
