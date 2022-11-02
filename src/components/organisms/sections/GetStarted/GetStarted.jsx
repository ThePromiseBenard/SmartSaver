import Heading from "../../../atoms/Heading";
import Button from "../../../atoms/Button";
import Text from "../../../atoms/Text";
import Iphone from "../../../../../public/iPhone 13.png";
import BgImage from "../../../../../public/Get started image.png";
import SmartImage from "../../../atoms/SmartImage";

export const GetStarted = () => {
  return (
    <div className="containerBox">
      <div className="relative bg-smartFooterBg rounded-lg md:h-[344px] xl:h-[508px] mt-10 md:mt-20 mb-8 md:mb-28">
        <div className="w-full h-full absolute ">
          <SmartImage src={BgImage} alt="background image" />
        </div>
        <div className="z-[8]  relative w-full flex flex-wrap md:flex-nowrap gap-8 justify-around px-4 pt-8 md:py-16 ">
          <div className="flex gap-6 flex-col justify-center">
            <Heading level={2} className="capitalize text-white">
              ready to get started?
            </Heading>
            <Text
              level={3}
              color="white"
              className="max-w-xl text-center md:text-left"
            >
              With great Savings and loans features, SmartSaver is smarter than
              your bank
            </Text>
            <div className="space-x-4 flex items-center justify-center md:justify-start">
              <Button variant="playLight" />
              <Button variant="appleLight" />
            </div>
          </div>
          <div className="xl:w-[350px] w-[200px] ">
            <div className="w-44 md:w-auto">
              <SmartImage src={Iphone} alt="smart app image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
