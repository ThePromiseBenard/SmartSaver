import SmartImage from "../../../atoms/SmartImage";
import CardText from "../../../molecules/CardText";
import PaymentImage from "../../../../../public/payments.png";
import Text from "../../../atoms/Text";
import { motion } from "framer-motion";

export const SeamlessPayments = () => {
  return (
    <div className="containerBox scroll-mt-20" id="payments">
      <div className="my-14 md:my-28 xl:my-48 grid md:grid-cols-2 gap-4 md:gap-16 ">
        <motion.div
          initial={{ x: "50vh" }}
          whileInView={{ x: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          viewport={{ once: "true " }}
          className="bg-smartOrange pt-4 px-4 rounded-2xl md:col-start-2 md:px-8 md:pt-8  2xl:w-[529px] flex items-center justify-center"
        >
          <div className="w-52 md:w-auto">
            <SmartImage src={PaymentImage} alt="payments image" />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 3 }}
          viewport={{ once: "true " }}
          className="flex justify-center  items-center md:col-start-1 md:row-start-1 max-w-[500px]"
        >
          <CardText title="Seamless payments, at little or no cost">
            <Text level={1} color="black">
              You can send money to anyone, pay all your bills, and recharge
              airtime, pay for Insurance, with just a few taps on your
              smartphone - and always at the lowest possible cost.
            </Text>
          </CardText>
        </motion.div>
      </div>
    </div>
  );
};
