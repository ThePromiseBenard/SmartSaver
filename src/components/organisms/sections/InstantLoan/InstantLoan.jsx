import SmartImage from "../../../atoms/SmartImage";
import CardText from "../../../molecules/CardText";
import LoanImage from "../../../../../public/Loan.png";
import Text from "../../../atoms/Text";
import { motion } from "framer-motion";

export const InstantLoan = () => {
  return (
    <div className="containerBox scroll-mt-20 overflow-hidden" id="loans">
      <div className=" my-10 md:my-20 grid md:grid-cols-2 gap-4 md:gap-16 ">
        <motion.div
          initial={{ x: "-50vh" }}
          whileInView={{ x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          viewport={{ once: "true " }}
          className="bg-smartOrange pt-4 px-4 md:px-8 md:pt-8 rounded-2xl  flex items-center justify-center  2xl:w-[529px]"
        >
          <div className="w-52 md:w-auto">
            <SmartImage src={LoanImage} alt="loan image" />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: "true " }}
          className="flex justify-center items-center "
        >
          <CardText title="Access to Instant Loans.">
            <Text level={1} color="black">
              Apply 24/7 and receive funds in your SmartSaver wallet within
              minutes. Unlock higher loan amounts and lower interest rates by
              repaying loans on time.
            </Text>
          </CardText>
        </motion.div>
      </div>
    </div>
  );
};
