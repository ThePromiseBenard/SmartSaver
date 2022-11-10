import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import ThisDay from "../../../../../public/ThisDay.png";
import Punch from "../../../../../public/Punch.png";
import Businessday from "../../../../../public/BusinessDay.png";
import cabal from "../../../../../public/TechCabal.png";
import SmartImage from "../../../atoms/SmartImage";
import { motion } from "framer-motion";

export const News = () => {
  return (
    <div className="bg-smartGrayBg pb-8">
      <div className="flex flex-col items-center justify-center pt-32 pb-10 xl:pt-32 xl:pb-20 space-y-14 containerBox">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: "true" }}
          className=" space-y-4 mt-8 xl:mt-0 ,d:pb-4"
        >
          <Heading className="md:!text-center" level={5}>
            <span className="text-smartOrange">Smart</span>
            <span className="text-smartSaver">Saver</span> in the News
          </Heading>
          <Text level={1} className="max-w-[919px] text-center">
            As a demonstration of our quality service and awesome impression, we
            have been published by some platforms across Nigeria and beyond.
          </Text>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-8">
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
            className="bg-white py-8 px-6 rounded-sm flex items-center justify-center  md:h-[170px]"
          >
            <SmartImage src={Businessday} alt="businessday news paper logo" />
          </motion.div>
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
            viewport={{ once: true }}
            className="bg-white py-8 px-6 rounded-sm flex items-center justify-center  md:h-[170px]"
          >
            <SmartImage src={ThisDay} alt=" thisday newspaper logo" />
          </motion.div>
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            viewport={{ once: true }}
            className="bg-white py-8 px-6 rounded-sm flex items-center justify-center  md:h-[170px]"
          >
            <SmartImage src={Punch} alt="punch newspapers logo" />
          </motion.div>
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2.5 }}
            viewport={{ once: true }}
            className="bg-white py-8 px-6 rounded-sm flex items-center justify-center  md:h-[170px]"
          >
            <SmartImage src={cabal} alt="techcabal logo" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
