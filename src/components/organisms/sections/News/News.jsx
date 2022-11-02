import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import ThisDay from "../../../../../public/ThisDay.png";
import Punch from "../../../../../public/Punch.png";
import Businessday from "../../../../../public/BusinessDay.png";
import cabal from "../../../../../public/TechCabal.png";
import SmartImage from "../../../atoms/SmartImage";

export const News = () => {
  return (
    <div className="bg-smartGrayBg pb-8">
      <div className="flex flex-col items-center justify-center pt-32 pb-10 xl:pt-32 xl:pb-20 space-y-14 containerBox">
        <div className="md:text-center space-y-4 mt-8 xl:mt-0 ,d:pb-4">
          <Heading level={5}>
            <span className="text-smartOrange">Smart</span>
            <span className="text-smartSaver">Saver</span> in the News
          </Heading>
          <Text level={1} className="max-w-[919px]">
            As a demonstration of our quality service and awesome impression, we
            have been published by some platforms across Nigeria and
            beyond.
          </Text>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-8">
          <div className="bg-white py-8 px-6 rounded-sm flex items-center justify-center  md:h-[170px]">
            <SmartImage src={Businessday} alt="businessday news paper logo"/>
          </div>
          <div className="bg-white py-8 px-6 rounded-sm flex items-center justify-center  md:h-[170px]">
            <SmartImage src={ThisDay} alt=" thisday newspaper logo" />
          </div>
          <div className="bg-white py-8 px-6 rounded-sm flex items-center justify-center  md:h-[170px]">
            <SmartImage src={Punch} alt="punch newspapers logo" />
          </div>
          <div className="bg-white py-8 px-6 rounded-sm flex items-center justify-center  md:h-[170px]">
            <SmartImage src={cabal} alt="techcabal logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
