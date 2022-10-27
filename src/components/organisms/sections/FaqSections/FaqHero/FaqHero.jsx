import Text from "../../../../atoms/Text";
import Heading from "../../../../atoms/Heading";
import HeroImage from "../../../../../../public/FaqHeroImage.png";
import SmartImage from "../../../../atoms/SmartImage";

export const FaqHero = () => {
  return (
    <div>
      <div className="heroContainer">
        <div className="relative text-center pt-14 md:pt-24">
          <SmartImage src={HeroImage} />
          <div className="absolute w-full top-1/2 flex  items-center flex-col gap-2 md:gap-6">
            <Heading level={2} className="!text-white !text-xl md:!text-5xl">
              FREQUENTLY ASKED QUESTIONS
            </Heading>
            <Text className="max-w-2xl !text-white/60 px-4">
              We’re happy to help you with all your questions, we give you the
              tools you need to save, borrow, and make payments.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
