import HeroImage from "../../../../../../public/CompanyHeroImage.png";
import Star from "../../../../../../public/starBg.png";
import Text from "../../../../atoms/Text";
import Heading from "../../../../atoms/Heading";
import SmartImage from "../../../../atoms/SmartImage";
import ApplyNow from "../../../../atoms/ApplyNow";

export const AmbassadorHero = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2 xl:grid-cols-3  relative heroContainer mb-16 md:mb-32">
        <div className="bg-smartGrayBg   py-16 md:py-24 xl:py-44   xl:col-span-2">
          <div className="containerBox space-y-4 md:space-y-8 cautionClass  relative">
            <div className="absolute hidden md:block -top-8 xl:-top-16 xl:w-[427px]  md:right-[25%] xl:right-[34%]">
              <SmartImage src={Star} alt="star background" />
            </div>
            <div className="relative ">
              <Heading level={1} className="font-extrabold max-w-[836px] ">
                Be a SmartSaver <br />
                Ambassador.
              </Heading>
            </div>
            <Text className="max-w-[620px] " level={1}>
              SmartSaver ambassador program is a community of creative and
              influential young men and women from different representative of
              life who are representatives of SmartSaver brand at their various
              location, professions and Schools to drive brand awareness and
              activation.
            </Text>

            <div>
              <ApplyNow />
            </div>
          </div>
        </div>
        <div className="bg-smartOrange flex items-end ">
          <div className="absolute bottom-0 right-8 w-[650px] hidden xl:block  ">
            <SmartImage src={HeroImage} alt="smart lady image" />
          </div>
          <div className="xl:hidden">
            <SmartImage src={HeroImage} alt="smart lady image" />
          </div>
        </div>
      </div>
    </div>
  );
};
