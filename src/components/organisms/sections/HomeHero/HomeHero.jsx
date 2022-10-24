import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import Paystack from "../../../../../public/Paystack_Logo1.png";
import Capricon from "../../../../../public/capricon2.png";
import Sterling from "../../../../../public/sterling2.png";
import Providous from "../../../../../public/providous.png";
import Firstcapitol from "../../../../../public/FirstCapitol2.png";
import HeaderUnderline from "../../../../../public/Underline.png";
import HeroImage from "../../../../../public/HomeHero Image2.png";
import SmartImage from "../../../atoms/SmartImage";
import Button from "../../../atoms/Button";
import Star from "../../../../../public/starBg.png";

export const HomeHero = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3  relative heroContainer mb-16 md:mb-32">
      <div className="bg-smartGrayBg space-y-16 md:space-y-28 xl:space-y-32  pt-16 md:pt-24 xl:pt-44  xl:col-span-2">
        <div className="containerBox space-y-4  cautionClass  relative">
          <div className="absolute hidden md:block -top-8 xl:-top-24 xl:w-[427px]  md:right-[25%] xl:right-[35%]">
            <SmartImage src={Star} />
          </div>
          <div className="relative">
            <Heading
              level={1}
              className="font-extrabold max-w-md relative z-[8]"
            >
              Smarter Than your Bank
            </Heading>
            <div className="absolute z-[4] bottom-[69px] md:bottom-[44px] lg:bottom-[50px] w-44 md:w-48 lg:w-60">
              <SmartImage src={HeaderUnderline} />
            </div>
          </div>
          <Text className="max-w-[500px]" level={1}>
            Get a free bank account; unlock the power of savings and investment,
            earn high interest your savings, pay bills and access cheap loan.
          </Text>
          <div className="space-x-4">
            <Button variant="appleOrange" />
            <Button variant="playOrange" />
          </div>
        </div>
        <div className="w-full bg-white  xl:pr-32   containerBox cautionClass">
          <div className="py-4 flex items-center gap-2 md:gap-4 xl:gap-8">
            <div className="">
              <SmartImage src={Paystack} alt="paystack logo" />
            </div>
            <div>
              <SmartImage src={Capricon} alt="capricon logo" />
            </div>
            <div>
              <SmartImage src={Sterling} alt="sterling bank logo" />
            </div>
            <div>
              <SmartImage src={Providous} alt="providous bank logo" />
            </div>
            <div>
              <SmartImage src={Firstcapitol} alt="first capitol logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-smartOrange flex items-end ">
        <div className="absolute bottom-0 right-0 w-[680px] hidden xl:block  ">
          <SmartImage src={HeroImage} />
        </div>
        <div className="xl:hidden">
          <SmartImage src={HeroImage} />
        </div>
      </div>
    </div>
  );
};
