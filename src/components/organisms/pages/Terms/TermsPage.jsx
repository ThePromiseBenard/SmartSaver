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
        <div className=" flex-1 xl:px-10 space-y-6 overflow-y-scroll ">
          <Text>
            This Agreement is a financial services and an end-user licence
            agreement between you (“End-user” “Borrower” or “You”) and the
            relevant First Capital C.M.S Limited entity duly incorporated and
            licensed under the laws of Nigeria. These Terms and Conditions apply
            to and regulate the provision of credit and services by First
            Capital C.M.S Limited through its service product “SmartSaver” to
            the Borrower or You herein
            <br />
            <br /> This Agreement (together with our Privacy Policy) sets out
            the complete terms and conditions (the “Terms and Conditions”) which
            shall be applicable to the Account (as hereinafter defined) opened
            by you with Smartsaver.
            <br />
            <br /> Smartsaver is a financial technology platform that operates
            automated savings and investments, bill payments platform and loan
            processing available through our website and mobile applications and
            made available by First Capital C.M.S Limited and by opening an
            account and agreeing to the terms you will automatically become a
            member of First Capital Cooperative Multipurpose Limited Lagos.
            These Terms and Conditions and any amendments or variations thereto
            take effect on their date of publication.
          </Text>
          <div className="space-y-6" id="">
            <Text className="!text-smartOrange" level={2}>
              PART A- General Provisions
            </Text>
            <Heading>ACCEPTANCE OF TERMS AND CONDITIONS</Heading>
            <ol>
              <li className="space-y-6">
                <Text>
                  1 .You must carefully read and understand the Terms and
                  Conditions set out in this Agreement (the Terms and
                  Conditions) before downloading or streaming the App or opening
                  an Account with Smartsaver.
                </Text>
                <Text>
                  2. After downloading the App, you will be deemed to have
                  accepted the Terms and Conditions immediately upon your
                  clicking the “Continue” button the App or any other button
                  which signifies your acceptance of these Terms and Conditions
                  and an intention to use the App. If you do not agree with the
                  Terms and Conditions please do not click “Continue”.
                </Text>
                <Text>
                  3. By downloading the App and opening an Account with
                  Smartsaver, you agree to comply with and be bound by the Terms
                  and Conditions governing the operation of the Account and you
                  affirm that the Terms and Conditions herein are without
                  prejudice to any other right that Smartsaver may have with
                  respect to the Account in law or otherwise. 4.
                </Text>
                <Text>
                  These Terms and Conditions may be amended or varied by
                  Smartsaver from time to time and your continued use of the
                  Services constitutes your agreement to be bound by the updated
                  or varied terms. Smartsaver will take all reasonable measures
                  to notify you of any changes.
                </Text>
                <Text>
                  5. From time to time, updates to the App may be issued.
                  Depending on the update, you may not be able to use the
                  Services until you have downloaded or streamed the latest
                  version of the App and accepted any new terms and conditions.
                </Text>
                <Text>
                  6. By using the App or any of the Services, you consent to us
                  collecting and using technical information about the Equipment
                  and related software, hardware and peripherals for Services
                  that are internet-based or wireless to improve our products
                  and to provide any Services to you. If you use these Services,
                  you consent to us and our affiliates and partners’
                  transmission, collection, retention, maintenance, processing
                  and use of your data to determine our credit scoring services
                  or to improve our Services and/or your experience while using
                  the App.
                </Text>
              </li>
            </ol>
          </div>
          
        </div>
      </div>
    </div>
  );
};
