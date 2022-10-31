import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import SmartLinks from "../../../atoms/SmartLinks";
import ReactMarkdown from "react-markdown";

export const PrivacyPage = ({ policies }) => {
  const { privacies } = policies;

  return (
    <div className="py-32">
      <div className="containerBox md:text-center">
        <Heading className="xl:-ml-40 xl:mb-6" level={2}>
          Our Privacy Policies
        </Heading>
      </div>
      <div className="containerBox min-h-screen xl:h-screen flex gap-6 flex-col xl:flex-row">
        <div className=" xl:w-[268px] sticky top-0 bg-white py-6 xl:py-0">
          <div className="xl: flex flex-wrap xl:flex-col gap-6 h-full">
            <SmartLinks url="#0">
              <Text color="black">Information we collect</Text>
            </SmartLinks>
            <SmartLinks url="#1">
              <Text color="black">Security</Text>
            </SmartLinks>
            <SmartLinks url="#2">
              <Text color="black">Contacting Us</Text>
            </SmartLinks>
          </div>
        </div>
        <div className=" flex-1 xl:px-10 space-y-6 overflow-y-scroll scroll-smooth ">
          <div className="prose md: prose-lg max-w-none">
            <p>
              This privacy policy (this Privacy Policy;) explains how personal
              information is collected, used, stored, and disclosed by
              Smartsaver.ng. This Privacy Policy applies to consumer users
              (individually referred to as t;) of our websites, applications,
              and other online services to which this Privacy Policy is posted
              (collectively, our Services).
              <br />
              <br /> This Privacy Policy is part of our Terms and Conditions. By
              accessing or using our Services, you agree to this Privacy Policy
              and our Terms of Use. The provisions contained in this Privacy
              Policy supersede all previous notices and statements regarding our
              privacy practices with respect to our Services. If you do not
              agree to every provision of this Privacy Policy and our Terms of
              Use, you may not access or use our Services.
              <br />
              <br /> Application of this Privacy Policy This Privacy Policy
              applies to your use of (regardless of means of access) our
              Services. You may access or’ use our Services through a desktop,
              laptop, mobile phone, mobile application, tablet, or other
              consumer electronic device (each, a ;Device).
            </p>
          </div>
          <div className="space-y-6 w-full">
            {privacies.map((policy, index) => (
              <div
                id={`${index}`}
                key={policy.id}
                className="mt-28 scroll-mt-24"
              >
                <p className="text-smartOrange mb-8 font-bold">{policy.part}</p>
                <div className="prose prose-slate md:prose-lg max-w-none">
                  <ReactMarkdown>{`${policy.contents.markdown}`}</ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
