import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import SmartLinks from "../../../atoms/SmartLinks";

export const TermsPage = () => {
  return (
    <div className="py-32">
      <div className="containerBox md:text-center">
        <Heading className="xl:-ml-32 xl:mb-6" level={2}>
          Terms and Conditions
        </Heading>
      </div>
      <div className="containerBox min-h-screen xl:h-screen flex gap-6 flex-col xl:flex-row">
        <div className=" xl:w-[268px] sticky top-0 bg-white py-6 xl:py-0">
          <div className="xl: flex flex-wrap xl:flex-col gap-6 h-full">
            <SmartLinks url="/#">
              <Text color="black">PART A- General Provisions</Text>
            </SmartLinks>
            <SmartLinks url="/#">
              <Text color="black">PART B- Our Loans</Text>
            </SmartLinks>
            <SmartLinks url="/#">
              <Text color="black">PART C- Investment/Savings Account</Text>
            </SmartLinks>
            <SmartLinks url="/#">
              <Text color="black">PART D - Wallets</Text>
            </SmartLinks>
          </div>
        </div>
        <div className=" flex-1 px-10 space-y-6 overflow-y-scroll ">
          <Text>
            This Agreement is a financial services and an end-user licence
            agreement between you (“End-user” “Borrower” or “You”) and the
            relevant First Capital C.M.S Limited entity duly incorporated and
            licensed under the laws of Nigeria. These Terms and Conditions apply
            to and regulate the provision of credit and services by First
            Capital C.M.S Limited through its service product “SmartSaver” to
            the Borrower or You herein
            <br /> This Agreement (together with our Privacy Policy) sets out
            the complete terms and conditions (the “Terms and Conditions”) which
            shall be applicable to the Account (as hereinafter defined) opened
            by you with Smartsaver.
            <br /> Smartsaver is a financial technology platform that operates
            automated savings and investments, bill payments platform and loan
            processing available through our website and mobile applications and
            made available by First Capital C.M.S Limited and by opening an
            account and agreeing to the terms you will automatically become a
            member of First Capital Cooperative Multipurpose Limited Lagos.
            These Terms and Conditions and any amendments or variations thereto
            take effect on their date of publication.
          </Text>
        </div>
      </div>
    </div>
  );
};
