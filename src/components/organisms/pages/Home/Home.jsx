import Community from "../../sections/Community";
import ControlLife from "../../sections/ControlLife";
import { FeaturesSection } from "../../sections/FeaturesSection/FeaturesSection";
import GetStarted from "../../sections/GetStarted";
import HomeHero from "../../sections/HomeHero";
import { InstantLoan } from "../../sections/InstantLoan/InstantLoan";
import News from "../../sections/News";
import SavingWays from "../../sections/SavingWays";
import SeamlessPayments from "../../sections/SeamleesPayments";

export const Home = () => {
  return (
    <div className="space-y-16 md:space-y-40 mb-32 md:mb-64">
      <HomeHero />
      <FeaturesSection />
      <InstantLoan />
      <SeamlessPayments />
      <ControlLife />
      <SavingWays />
      <GetStarted />
      <News />
      <Community />
    </div>
  );
};
