import SmartImage from "../../../atoms/SmartImage";
import CardText from "../../../molecules/CardText";
import ControlImage from "../../../../../public/ImageTest.png";
import Text from "../../../atoms/Text";
import { motion } from "framer-motion";

export const ControlLife = () => {
  return (
    <div className="containerBox scroll-mt-20" id="insurance">
      <div className="  md:mt-28 xl:mt-48 pb-10 md:pb-24 grid md:grid-cols-2 gap-4 md:gap-16 ">
        <motion.div
          initial={{ x: "-50vh" }}
          whileInView={{ x: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          viewport={{ once: "true" }}
          className="bg-smartOrange pt-4 px-4 md:px-8 md:pt-8 rounded-2xl flex items-center justify-center  2xl:w-[529px]"
        >
          <div className="w-52 md:w-auto">
            <SmartImage src={ControlImage} alt="loan image" />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 3 }}
          viewport={{ once: "true "}}
          className="flex justify-center items-center "
        >
          <CardText title="Control Your Life">
            <Text level={1} color="black">
              Insure your health and properties with different Insurance plans
              today at SmartSaver app.
            </Text>
          </CardText>
        </motion.div>
      </div>
    </div>
  );
};
