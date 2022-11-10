import Heading from "../../atoms/Heading";
import Text from "../../atoms/Text";
import IconBox from "../../atoms/IconBox";
import { motion } from "framer-motion";

export const Features = ({ title, paragraph, icon }) => {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className=" flex flex-col justify-center text-center  items-center  gap-2 md:gap-4 h-66"
    >
      <IconBox>{icon}</IconBox>
      <Heading level={6}>{title}</Heading>
      <Text className=" font-medium md:w-[295px]">{paragraph}</Text>
    </motion.div>
  );
};
