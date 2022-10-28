import StepList from "../../../../atoms/StepList";
import StepImage from "../../../../../../public/AmbassadorImage.png";
import SmartImage from "../../../../atoms/SmartImage";
import Heading from "../../../../atoms/Heading";

export const StepsSection = () => {
  return (
    <div className="containerBox">
      <div className="flex flex-wrap-reverse xl:flex-nowrap gap-16 pb-10 md:py-14 xl:py-28">
        <div className="xl:w-[604px]">
          <SmartImage src={StepImage} alt="young ladies discussing" />
        </div>
        <div>
          <div className="border-b border-smartGray pb-8">
            <Heading level={4}>
              All you need to become a{" "}
              <span className="text-smartOrange">Smart</span>Saver Ambassador
            </Heading>
          </div>

          <StepList>
            To be a SmartSaver ambassador, you need to be Charismatic,
            courageous, innovative and creative
          </StepList>
          <StepList>You need be a registered user with referrals</StepList>
          <StepList>
            An ambassador should be active on social media platforms with good
            number of followership
          </StepList>
          <StepList>
            He/she must command a feel good aura that people want to be around
            and associate with
          </StepList>
          <StepList>
            A potential ambassador should have an outstanding social and
            leadership skills in order to thrive in any social environment
            whether online or offline.
          </StepList>
        </div>
      </div>
    </div>
  );
};
