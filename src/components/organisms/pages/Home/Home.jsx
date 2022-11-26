import Community from "../../sections/Community";
import ControlLife from "../../sections/ControlLife";
import { FeaturesSection } from "../../sections/FeaturesSection/FeaturesSection";
import GetStarted from "../../sections/GetStarted";
import HomeHero from "../../sections/HomeHero";
import { InstantLoan } from "../../sections/InstantLoan/InstantLoan";
import News from "../../sections/News";
import SavingWays from "../../sections/SavingWays";
import SeamlessPayments from "../../sections/SeamleesPayments";
import VideoSection from "../../sections/VideoSection";

export const Home = () => {
  return (
    <div className="">
      <HomeHero />
      <FeaturesSection />
      <SavingWays />
      <InstantLoan />
      <SeamlessPayments />
      <ControlLife />
      <GetStarted />
      <News />
      <VideoSection />
      <Community />
    </div>
  );
};
