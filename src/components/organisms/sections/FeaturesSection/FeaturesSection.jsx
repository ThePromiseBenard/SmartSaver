import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import FeaturesLeft from "../../../molecules/FeaturesLeft";
import FeaturesRight from "../../../molecules/FeaturesRight";
import featureImage from "../../../../../public/Features Image.png";
import SmartImage from "../../../atoms/SmartImage";
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  return (
    <div className=" space-y-8 md:space-y-16 containerBox ">
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{once:"true"}}
        className=" space-y-4 mt-8 md:!text-center"
      >
        <Heading className="md:!text-center" level={3}>
          Built With You In Mind
        </Heading>
        <Text level={1} className="max-w-[919px] mx-auto text-center">
          We are a Fintech Service Company developed to offer flexible and
          disciplined financial inclusiveness in a responsible and sustainable
          way.
        </Text>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:pb-28">
        <FeaturesLeft />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{once:"true"}}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="hidden lg:block"
        >
          <SmartImage src={featureImage} alt="woman smilling" />
        </motion.div>
        <FeaturesRight />
      </div>
    </div>
  );
};
