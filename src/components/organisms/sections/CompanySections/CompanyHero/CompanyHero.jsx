import HeroImage from "../../../../../../public/CompanyHeroImage.png";
import Star from "../../../../../../public/starBg.png";
import Text from "../../../../atoms/Text";
import Heading from "../../../../atoms/Heading";
import SmartImage from "../../../../atoms/SmartImage";
import { motion } from "framer-motion";

export const CompanyHero = () => {
  return (
    <div className="overflow-hidden">
      <div className="grid md:grid-cols-2 xl:grid-cols-3  relative heroContainer mb-16 md:mb-32 pt-8">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x:0 }}
          transition={{ duration: 0.3 }}
          className="bg-smartGrayBg   py-16 md:py-24 xl:py-36 xl:col-span-2"
        >
          <div className="containerBox space-y-4 md:space-y-8 cautionClass  relative">
            <div className="absolute hidden md:block -top-8 xl:-top-16 xl:w-[427px]  md:right-[25%] xl:right-[34%]">
              <SmartImage src={Star} alt="star background" />
            </div>
            <div className="relative">
              <Heading level={1} className="font-extrabold max-w-lg">
                Responsible and Sustainable Financial Inclusion
              </Heading>
            </div>
            <Text className="max-w-[500px] text-center md:text-left" level={1}>
              SmartSaver aims to provide smart, flexible and disciplined
              financial products, high yield earning on savings, insurance and
              access to cheap loans in a unique secured platform.
            </Text>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-smartOrange flex items-end justify-center "
        >
          <div className="absolute bottom-0 right-8 w-[650px] hidden xl:block  ">
            <SmartImage
              src={HeroImage}
              alt="black smart girl"
              priority={true}
            />
          </div>
          <div className="xl:hidden">
            <SmartImage
              src={HeroImage}
              alt="black smart girl"
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
